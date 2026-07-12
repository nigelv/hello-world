const GEOCODE_URL = "https://geocoding-api.open-meteo.com/v1/search";
const FORECAST_URL = "https://api.open-meteo.com/v1/forecast";

const els = {
  form: document.getElementById("search-form"),
  input: document.getElementById("city-input"),
  place: document.getElementById("place"),
  temp: document.getElementById("temp"),
  summary: document.getElementById("summary"),
  feels: document.getElementById("feels"),
  humidity: document.getElementById("humidity"),
  wind: document.getElementById("wind"),
  forecast: document.getElementById("forecast-list"),
  status: document.getElementById("status"),
};

const WEATHER = {
  0: { label: "Clear skies", condition: "clear", icon: "sun" },
  1: { label: "Mainly clear", condition: "clear", icon: "sun" },
  2: { label: "Partly cloudy", condition: "clouds", icon: "partly" },
  3: { label: "Overcast", condition: "clouds", icon: "cloud" },
  45: { label: "Foggy", condition: "fog", icon: "fog" },
  48: { label: "Icy fog", condition: "fog", icon: "fog" },
  51: { label: "Light drizzle", condition: "rain", icon: "rain" },
  53: { label: "Drizzle", condition: "rain", icon: "rain" },
  55: { label: "Heavy drizzle", condition: "rain", icon: "rain" },
  61: { label: "Light rain", condition: "rain", icon: "rain" },
  63: { label: "Rain", condition: "rain", icon: "rain" },
  65: { label: "Heavy rain", condition: "rain", icon: "rain" },
  71: { label: "Light snow", condition: "snow", icon: "snow" },
  73: { label: "Snow", condition: "snow", icon: "snow" },
  75: { label: "Heavy snow", condition: "snow", icon: "snow" },
  77: { label: "Snow grains", condition: "snow", icon: "snow" },
  80: { label: "Rain showers", condition: "rain", icon: "rain" },
  81: { label: "Rain showers", condition: "rain", icon: "rain" },
  82: { label: "Violent showers", condition: "rain", icon: "rain" },
  85: { label: "Snow showers", condition: "snow", icon: "snow" },
  86: { label: "Heavy snow showers", condition: "snow", icon: "snow" },
  95: { label: "Thunderstorm", condition: "storm", icon: "storm" },
  96: { label: "Storm with hail", condition: "storm", icon: "storm" },
  99: { label: "Storm with heavy hail", condition: "storm", icon: "storm" },
};

function weatherInfo(code) {
  return WEATHER[code] ?? { label: "Mixed conditions", condition: "clouds", icon: "cloud" };
}

function iconSvg(kind) {
  const common =
    'class="day__icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"';
  switch (kind) {
    case "sun":
      return `<svg ${common}><circle cx="16" cy="16" r="6" stroke="currentColor" stroke-width="1.8"/><path d="M16 4v3M16 25v3M4 16h3M25 16h3M7.5 7.5l2.1 2.1M22.4 22.4l2.1 2.1M7.5 24.5l2.1-2.1M22.4 9.6l2.1-2.1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`;
    case "partly":
      return `<svg ${common}><circle cx="12" cy="12" r="4.5" stroke="currentColor" stroke-width="1.8"/><path d="M10 22h12a5 5 0 0 0 0-10 7 7 0 0 0-13.2 2.2A4.5 4.5 0 0 0 10 22Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`;
    case "cloud":
      return `<svg ${common}><path d="M9 23h14a5.5 5.5 0 0 0 0-11 7.5 7.5 0 0 0-14.4 2.5A5 5 0 0 0 9 23Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`;
    case "rain":
      return `<svg ${common}><path d="M9 17h14a5.5 5.5 0 0 0 0-11 7.5 7.5 0 0 0-14.4 2.5A5 5 0 0 0 9 17Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M12 21v4M16 20v5M20 21v4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`;
    case "snow":
      return `<svg ${common}><path d="M9 17h14a5.5 5.5 0 0 0 0-11 7.5 7.5 0 0 0-14.4 2.5A5 5 0 0 0 9 17Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M12 21l1 2M16 20l1 2M20 21l1 2M13 21l-1 2M17 20l-1 2M21 21l-1 2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`;
    case "storm":
      return `<svg ${common}><path d="M9 16h14a5.5 5.5 0 0 0 0-11 7.5 7.5 0 0 0-14.4 2.5A5 5 0 0 0 9 16Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M15 18l-3 5h4l-2 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    case "fog":
      return `<svg ${common}><path d="M6 12h20M8 16h16M10 20h12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`;
    default:
      return `<svg ${common}><circle cx="16" cy="16" r="6" stroke="currentColor" stroke-width="1.8"/></svg>`;
  }
}

function formatTemp(value) {
  return `${Math.round(value)}°`;
}

function weekdayLabel(dateStr, index) {
  if (index === 0) return "Today";
  const date = new Date(`${dateStr}T12:00:00`);
  return date.toLocaleDateString(undefined, { weekday: "short" });
}

function setStatus(message) {
  els.status.textContent = message ?? "";
}

async function geocodeCity(name) {
  const url = new URL(GEOCODE_URL);
  url.searchParams.set("name", name);
  url.searchParams.set("count", "1");
  url.searchParams.set("language", "en");
  url.searchParams.set("format", "json");

  const response = await fetch(url);
  if (!response.ok) throw new Error("Could not search for that city.");

  const data = await response.json();
  if (!data.results?.length) throw new Error(`No matches for “${name}”.`);

  const place = data.results[0];
  return {
    name: place.name,
    country: place.country,
    admin: place.admin1,
    latitude: place.latitude,
    longitude: place.longitude,
    timezone: place.timezone,
  };
}

async function fetchForecast(place) {
  const url = new URL(FORECAST_URL);
  url.searchParams.set("latitude", place.latitude);
  url.searchParams.set("longitude", place.longitude);
  url.searchParams.set("current", "temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m");
  url.searchParams.set("daily", "weather_code,temperature_2m_max,temperature_2m_min");
  url.searchParams.set("timezone", place.timezone || "auto");
  url.searchParams.set("forecast_days", "7");

  const response = await fetch(url);
  if (!response.ok) throw new Error("Forecast request failed.");
  return response.json();
}

function renderCurrent(place, current) {
  const info = weatherInfo(current.weather_code);
  const locationBits = [place.name, place.admin, place.country].filter(Boolean);
  const unique = [...new Set(locationBits)];

  els.place.textContent = unique[0];
  els.temp.textContent = formatTemp(current.temperature_2m);
  els.summary.textContent = `${info.label} in ${unique.slice(1).join(", ") || unique[0]}.`;
  els.feels.textContent = formatTemp(current.apparent_temperature);
  els.humidity.textContent = `${Math.round(current.relative_humidity_2m)}%`;
  els.wind.textContent = `${Math.round(current.wind_speed_10m)} km/h`;
  document.body.dataset.condition = info.condition;
}

function renderForecast(daily) {
  els.forecast.innerHTML = daily.time
    .map((date, index) => {
      const info = weatherInfo(daily.weather_code[index]);
      return `
        <button class="day" type="button" role="listitem" aria-pressed="${index === 0}" data-index="${index}" style="animation-delay: ${0.05 * index}s">
          <span class="day__label">${weekdayLabel(date, index)}</span>
          ${iconSvg(info.icon)}
          <span class="day__temps">
            <span class="day__high">${formatTemp(daily.temperature_2m_max[index])}</span>
            <span class="day__low">${formatTemp(daily.temperature_2m_min[index])}</span>
          </span>
        </button>
      `;
    })
    .join("");

  els.forecast.querySelectorAll(".day").forEach((button) => {
    button.addEventListener("click", () => {
      els.forecast.querySelectorAll(".day").forEach((item) => item.setAttribute("aria-pressed", "false"));
      button.setAttribute("aria-pressed", "true");
      const index = Number(button.dataset.index);
      const info = weatherInfo(daily.weather_code[index]);
      document.body.dataset.condition = info.condition;
      setStatus(
        `${weekdayLabel(daily.time[index], index)}: ${info.label}, high ${formatTemp(daily.temperature_2m_max[index])} / low ${formatTemp(daily.temperature_2m_min[index])}.`
      );
    });
  });
}

async function loadWeather(query) {
  setStatus("Fetching the forecast…");
  const place = await geocodeCity(query);
  const forecast = await fetchForecast(place);
  renderCurrent(place, forecast.current);
  renderForecast(forecast.daily);
  setStatus(`Updated for ${place.name}.`);
}

async function loadByCoordinates(latitude, longitude) {
  setStatus("Reading the sky near you…");
  const place = {
    name: "Your location",
    country: "",
    admin: "",
    latitude,
    longitude,
    timezone: "auto",
  };
  const forecast = await fetchForecast(place);
  renderCurrent(place, forecast.current);
  renderForecast(forecast.daily);
  setStatus("Showing weather for your current location.");
}

els.form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const query = els.input.value.trim();
  if (!query) return;

  try {
    await loadWeather(query);
  } catch (error) {
    setStatus(error.message || "Something went wrong.");
  }
});

async function bootstrap() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          await loadByCoordinates(position.coords.latitude, position.coords.longitude);
        } catch (error) {
          setStatus(error.message || "Could not load local weather.");
          await loadWeather("London");
        }
      },
      async () => {
        try {
          await loadWeather("London");
        } catch (error) {
          setStatus(error.message || "Could not load a default forecast.");
        }
      },
      { timeout: 8000 }
    );
    return;
  }

  try {
    await loadWeather("London");
  } catch (error) {
    setStatus(error.message || "Could not load a default forecast.");
  }
}

bootstrap();
