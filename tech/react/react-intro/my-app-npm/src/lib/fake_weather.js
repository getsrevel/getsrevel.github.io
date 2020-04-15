import firebase from "../lib/Firebase";

const Timestamp =  firebase.firestore.Timestamp;

// helper for generating firestore timestamps
const t = timeString => Timestamp.fromDate(new Date(timeString));

// Fake data - could come from a database or similar
const data = [
  {
    lastUpdate: t('2020-03-13T11:30:42'),
    key: "dataIdOne",
    windMeasurements: [
      { time: t('2020-03-13T10:20:42'), windSpeed: 12, windDir: 277 },
      { time: t('2020-03-13T11:30:42'), windSpeed: 7, windDir: 270 },
    ]
  },
  {
    lastUpdate: t("2020-03-14T09:31:10"),
    key: "dataIdTwo",
    windMeasurements: [
      { time: t("2020-03-14T09:07:34"), windSpeed: 17, windDir: 179 },
      { time: t("2020-03-14T09:31:10"), windSpeed: 25, windDir: 183 },
      { time: t("2020-03-14T11:30:42"), windSpeed: 12, windDir: 180 },
      { time: t("2020-03-14T12:37:20"), windSpeed: 23, windDir: 171 },
    ]
  },
];

export default data;