import axios from "axios";
import ErrorPage from "./ErrorPage";
import { useEffect, useState } from "react";
import { HistoricalChart } from "../config/api";
import { Line } from "react-chartjs-2";
import {
  CircularProgress,
  createTheme,
  ThemeProvider,
  styled,
} from "@mui/material";
import SelectButton from "./SelectButton";
import { chartDays } from "../config/data";
import { CryptoState } from "../CryptoContext";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

// Styled container component
const ChartContainer = styled('div')(({ theme }) => ({
  width: "75%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 25,
  padding: 40,
  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginTop: 0,
    padding: 20,
    paddingTop: 0,
  },
}));

// Button group container
const ButtonGroup = styled('div')({
  display: "flex",
  marginTop: 20,
  justifyContent: "space-around",
  width: "100%",
});

// Dark theme
const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    mode: "dark", // Changed from 'type' to 'mode' in v5
  },
});

const CoinInfo = ({ coin }) => {
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);
  const { currency } = CryptoState();
  const [loading, setLoading] = useState(false); // Renamed from 'flag' to more descriptive 'loading'

  const fetchHistoricData = async () => {
    if (!coin || !coin.id) {
      return <ErrorPage message="hehe sorry ;)" />;
    }    
    setLoading(true);
    try {
      const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
      setHistoricData(data.prices);
    } catch (error) {
      console.error("Error fetching historical data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days, currency]); // Added currency to dependency array

  // Format chart data
  const chartData = {
    labels: historicData?.map((coin) => {
      const date = new Date(coin[0]);
      if (days === 1) {
        // Format as time for 1 day view
        return date.getHours() > 12
          ? `${date.getHours() - 12}:${date.getMinutes().toString().padStart(2, '0')} PM`
          : `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')} AM`;
      }
      // Format as date for longer ranges
      return date.toLocaleDateString();
    }),
    datasets: [
      {
        data: historicData?.map((coin) => coin[1]),
        label: `Price (Past ${days} Days) in ${currency}`,
        borderColor: "#EEBC1D",
        borderWidth: 2,
        fill: false,
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    elements: {
      point: {
        radius: 1,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <ChartContainer>
        {loading || !historicData ? (
          <CircularProgress
            sx={{ color: "gold" }}
            size={250}
            thickness={1}
          />
        ) : (
          <>
            <Line data={chartData} options={chartOptions} />
            <ButtonGroup>
              {chartDays.map((day) => (
                <SelectButton
                  key={day.value}
                  onClick={() => {
                    setDays(day.value);
                    setLoading(true);
                  }}
                  selected={day.value === days}
                >
                  {day.label}
                </SelectButton>
              ))}
            </ButtonGroup>
          </>
        )}
      </ChartContainer>
    </ThemeProvider>
  );
};

export default CoinInfo;