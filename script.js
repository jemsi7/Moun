const rawCourses = [
  { id: 1, name: "한라산", elevation: 1950, region: "제주도" },
  { id: 2, name: "지리산", elevation: 1915, region: "경남,전남" },
  { id: 3, name: "설악산", elevation: 1708, region: "강원 인제 양양" },
  { id: 4, name: "덕유산", elevation: 1614, region: "전북 무주" },
  { id: 5, name: "계방산", elevation: 1577, region: "강원 평창" },
  { id: 6, name: "태백산", elevation: 1567, region: "강원 태백" },
  { id: 7, name: "오대산", elevation: 1563, region: "강원 평창" },
  { id: 8, name: "가리왕산", elevation: 1561, region: "강원 정선" },
  { id: 9, name: "화악산", elevation: 1468, region: "가평 화천" },
  { id: 10, name: "소백산", elevation: 1439, region: "충북 단양" },
  { id: 11, name: "방태산", elevation: 1436, region: "강원 인제" },
  { id: 12, name: "가야산", elevation: 1430, region: "경남 합천" },
  { id: 13, name: "점봉산", elevation: 1424, region: "강원 인제" },
  { id: 14, name: "두타산", elevation: 1353, region: "강원 삼척" },
  { id: 15, name: "백덕산", elevation: 1350, region: "영월 평창" },
  { id: 16, name: "대암산", elevation: 1304, region: "강원 양구" },
  { id: 17, name: "치악산", elevation: 1288, region: "강원 원주" },
  { id: 18, name: "명지산", elevation: 1267, region: "경기 가평" },
  { id: 19, name: "민주지산", elevation: 1242, region: "충북 영동" },
  { id: 20, name: "가지산", elevation: 1240, region: "울산 울주" },
  { id: 21, name: "장안산", elevation: 1237, region: "전북 장수" },
  { id: 22, name: "백운산", elevation: 1218, region: "전남 광양" },
  { id: 23, name: "신불산", elevation: 1209, region: "울산 울주" },
  { id: 24, name: "팔공산", elevation: 1193, region: "대구 영천" },
  { id: 25, name: "황석산", elevation: 1190, region: "경남 거창" },
  { id: 26, name: "재약산", elevation: 1189, region: "경남 밀양" },
  { id: 27, name: "운문산", elevation: 1188, region: "청도 밀양" },
  { id: 28, name: "무등산", elevation: 1187, region: "광주 전남" },
  { id: 29, name: "용문산", elevation: 1157, region: "경기 용문" },
  { id: 30, name: "운장산", elevation: 1126, region: "전북 진안" },
  { id: 31, name: "황악산", elevation: 1111, region: "영동 김천" },
  { id: 32, name: "황매산", elevation: 1108, region: "경남 합천" },
  { id: 33, name: "주흘산", elevation: 1106, region: "경북 문경" },
  { id: 34, name: "월악산", elevation: 1094, region: "충북 충주" },
  { id: 35, name: "비슬산", elevation: 1084, region: "대구 달성" },
  { id: 36, name: "황장산", elevation: 1077, region: "경북 문경" },
  { id: 37, name: "덕항산", elevation: 1071, region: "강원 삼척" },
  { id: 38, name: "속리산", elevation: 1057, region: "충북 보은" },
  { id: 39, name: "가리산", elevation: 1051, region: "강원 홍천" },
  { id: 40, name: "적상산", elevation: 1034, region: "전북 무주" },
  { id: 41, name: "태화산", elevation: 1027, region: "영월 단양" },
  { id: 42, name: "금수산", elevation: 1016, region: "충북 단양" },
  { id: 43, name: "응봉산", elevation: 999, region: "경북 울진" },
  { id: 44, name: "희양산", elevation: 998, region: "충북 괴산" },
  { id: 45, name: "성인봉", elevation: 984, region: "울릉도" },
  { id: 46, name: "금오산", elevation: 977, region: "경북 구미" },
  { id: 47, name: "도락산", elevation: 964, region: "충북 단양" },
  { id: 48, name: "운악산", elevation: 936, region: "경기 가평" },
  { id: 49, name: "대야산", elevation: 931, region: "경북 문경" },
  { id: 50, name: "명성산", elevation: 923, region: "경기 포천" },
  { id: 51, name: "백운산", elevation: 904, region: "경기 포천" },
  { id: 52, name: "서대산", elevation: 904, region: "충남 금산" },
  { id: 53, name: "공작산", elevation: 887, region: "강원 홍천" },
  { id: 54, name: "조계산", elevation: 884, region: "전남 순천" },
  { id: 55, name: "백운산", elevation: 883, region: "평창 정선" },
  { id: 56, name: "축령산", elevation: 879, region: "경기 가평" },
  { id: 57, name: "대둔산", elevation: 878, region: "충남 금산" },
  { id: 58, name: "용화산", elevation: 878, region: "강원 춘천" },
  { id: 59, name: "구병산", elevation: 876, region: "충북 보은" },
  { id: 60, name: "청량산", elevation: 870, region: "경북 봉화" },
  { id: 61, name: "유명산", elevation: 862, region: "경기 가평" },
  { id: 62, name: "계룡산", elevation: 845, region: "충남 계룡" },
  { id: 63, name: "북한산", elevation: 837, region: "서울 도봉" },
  { id: 64, name: "천성산", elevation: 922, region: "경남 양산" },
  { id: 65, name: "천마산", elevation: 812, region: "경기 남양주" },
  { id: 66, name: "월출산", elevation: 809, region: "전남 영암" },
  { id: 67, name: "금정산", elevation: 802, region: "부산 금정" },
  { id: 68, name: "모악산", elevation: 790, region: "전북 완주" },
  { id: 69, name: "오봉산", elevation: 779, region: "강원 춘천" },
  { id: 70, name: "내장산", elevation: 763, region: "전북 정읍" },
  { id: 71, name: "무학산", elevation: 761, region: "경남 창원" },
  { id: 72, name: "화왕산", elevation: 757, region: "경남 청녕" },
  { id: 73, name: "방장산", elevation: 742, region: "전북 정읍" },
  { id: 74, name: "백암산", elevation: 741, region: "전남 장성" },
  { id: 75, name: "도봉산", elevation: 740, region: "서울 도봉" },
  { id: 76, name: "추월산", elevation: 731, region: "전남 담양" },
  { id: 77, name: "천관산", elevation: 723, region: "전남 장흥" },
  { id: 78, name: "주왕산", elevation: 721, region: "경북 청송" },
  { id: 79, name: "천태산", elevation: 715, region: "충북 영동" },
  { id: 80, name: "내연산", elevation: 710, region: "경북 포항" },
  { id: 81, name: "금산", elevation: 701, region: "경남 남해" },
  { id: 82, name: "두륜산", elevation: 700, region: "전남 해남" },
  { id: 83, name: "마이산", elevation: 685, region: "전북 진안" },
  { id: 84, name: "감악산", elevation: 675, region: "경기 파주" },
  { id: 85, name: "삼악산", elevation: 645, region: "강원 춘천" },
  { id: 86, name: "관악산", elevation: 629, region: "서울 관악" },
  { id: 87, name: "팔영산", elevation: 609, region: "전남 고흥" },
  { id: 88, name: "강천산", elevation: 584, region: "전남 순창" },
  { id: 89, name: "칠갑산", elevation: 561, region: "충남 청양" },
  { id: 90, name: "소요산", elevation: 559, region: "경기 동두천" },
  { id: 91, name: "연화산", elevation: 528, region: "경남 고성" },
  { id: 92, name: "변산", elevation: 508, region: "충남 부안" },
  { id: 93, name: "덕숭산", elevation: 495, region: "충남 예산" },
  { id: 94, name: "남산", elevation: 494, region: "경북 경주" },
  { id: 95, name: "마니산", elevation: 469, region: "경기 강화" },
  { id: 96, name: "미륵산", elevation: 461, region: "경남 통영" },
  { id: 97, name: "지리망산", elevation: 398, region: "경남 사량도" },
  { id: 98, name: "깃대봉", elevation: 368, region: "전남 홍도" },
  { id: 99, name: "선운산", elevation: 336, region: "전북 고창" },
  { id: 100, name: "팔봉산", elevation: 302, region: "강원 홍천" }
];

function normalizeMountainKey(text) {
  return String(text || "")
    .replace(/\s+/g, "")
    .replace(/[()]/g, "")
    .toLowerCase();
}

const mountainNameIndex = rawCourses.reduce((acc, item) => {
  const key = normalizeMountainKey(item.name);
  const bucket = acc.get(key) || [];
  bucket.push(item);
  acc.set(key, bucket);
  return acc;
}, new Map());

const provinceBase = {
  제주도: { lat: 33.3617, lng: 126.5292 },
  서울: { lat: 37.5665, lng: 126.978 },
  경기: { lat: 37.4138, lng: 127.5183 },
  강원: { lat: 37.822, lng: 128.1567 },
  충북: { lat: 36.635, lng: 127.491 },
  충남: { lat: 36.5184, lng: 126.8 },
  경북: { lat: 36.4919, lng: 128.8889 },
  경남: { lat: 35.4606, lng: 128.2132 },
  전북: { lat: 35.8201, lng: 127.108 },
  전남: { lat: 34.8679, lng: 126.991 },
  부산: { lat: 35.1796, lng: 129.0756 },
  대구: { lat: 35.8714, lng: 128.6014 },
  광주: { lat: 35.1595, lng: 126.8526 },
  울산: { lat: 35.5384, lng: 129.3114 },
  인천: { lat: 37.4563, lng: 126.7052 },
  울릉도: { lat: 37.5, lng: 130.9 },
  양산: { lat: 35.3385, lng: 129.024 },
};

const localBase = {
  가평: { lat: 37.8221, lng: 127.5112 },
  인제: { lat: 38.0698, lng: 128.1709 },
  양양: { lat: 38.076, lng: 128.6209 },
  평창: { lat: 37.3709, lng: 128.3922 },
  태백: { lat: 37.165, lng: 129.047 },
  정선: { lat: 37.377, lng: 128.66 },
  화천: { lat: 38.1066, lng: 127.707 },
  단양: { lat: 36.9854, lng: 128.3673 },
  무주: { lat: 36.0076, lng: 127.6586 },
  합천: { lat: 35.568, lng: 128.171 },
  문경: { lat: 36.765, lng: 128.1325 },
  충주: { lat: 37.0101, lng: 127.7613 },
  영월: { lat: 37.1839, lng: 128.4645 },
  영동: { lat: 36.1756, lng: 127.785 },
  금산: { lat: 36.1096, lng: 127.4881 },
  울릉도: { lat: 37.4849, lng: 130.9056 },
  장수: { lat: 35.6512, lng: 127.5216 },
  광양: { lat: 34.9405, lng: 127.6958 },
  영천: { lat: 35.9737, lng: 128.9385 },
  거창: { lat: 35.6818, lng: 127.9116 },
  밀양: { lat: 35.5036, lng: 128.7498 },
  청도: { lat: 35.6522, lng: 128.734 },
  광주: { lat: 35.1595, lng: 126.8526 },
  용문: { lat: 37.5957, lng: 127.2364 },
  진안: { lat: 35.7919, lng: 127.4355 },
  김천: { lat: 36.1397, lng: 128.1137 },
  문경: { lat: 36.7747, lng: 128.0934 },
  울진: { lat: 36.991, lng: 129.405 },
  괴산: { lat: 36.8196, lng: 127.7861 },
  구미: { lat: 36.1194, lng: 128.344 },
  홍천: { lat: 37.6958, lng: 127.8884 },
  보은: { lat: 36.4896, lng: 127.725 },
  봉화: { lat: 36.8921, lng: 128.733 },
  경주: { lat: 35.8562, lng: 129.2247 },
  포항: { lat: 36.019, lng: 129.3435 },
  경룡: { lat: 36.4147, lng: 127.2497 },
  남양주: { lat: 37.6363, lng: 127.216 },
  영암: { lat: 34.8009, lng: 126.6979 },
  완주: { lat: 35.9708, lng: 127.1622 },
  정읍: { lat: 35.5659, lng: 126.8567 },
  창원: { lat: 35.228, lng: 128.6811 },
  청녕: { lat: 35.6202, lng: 129.0384 },
  장성: { lat: 35.3049, lng: 126.785 },
  담양: { lat: 35.3201, lng: 126.9852 },
  장흥: { lat: 34.6816, lng: 126.9095 },
  청송: { lat: 36.4384, lng: 128.7392 },
  남해: { lat: 34.8165, lng: 127.8922 },
  해남: { lat: 34.5745, lng: 126.5985 },
  파주: { lat: 37.7595, lng: 126.7794 },
  청양: { lat: 36.4563, lng: 126.8011 },
  동두천: { lat: 37.9036, lng: 127.0607 },
  고성: { lat: 34.973, lng: 128.3223 },
  부안: { lat: 35.7264, lng: 126.7282 },
  예산: { lat: 36.6779, lng: 126.847 },
  강화: { lat: 37.7487, lng: 126.4858 },
  통영: { lat: 34.8544, lng: 128.4332 },
  사량도: { lat: 34.4863, lng: 126.2861 },
  홍도: { lat: 34.6846, lng: 125.4361 },
  고흥: { lat: 34.6119, lng: 127.2863 },
  순창: { lat: 35.3775, lng: 127.1307 },
  고창: { lat: 35.4353, lng: 126.7016 },
  정선: { lat: 37.3805, lng: 128.6605 },
  순천: { lat: 34.9509, lng: 127.4879 },
  평창: { lat: 37.3708, lng: 128.3906 },
  울주: { lat: 35.5226, lng: 129.2369 },
  양구: { lat: 38.1053, lng: 128.618 },
  원주: { lat: 37.3422, lng: 127.9202 },
  춘천: { lat: 37.8853, lng: 127.7298 },
  삼척: { lat: 37.4467, lng: 129.1654 },
  광주: { lat: 35.1595, lng: 126.8526 },
  포항: { lat: 36.019, lng: 129.3435 },
  경안: { lat: 37.5665, lng: 126.978 },
  계룡: { lat: 36.2694, lng: 127.248 },
  남포: { lat: 34.800, lng: 127.892 },
  금정: { lat: 35.2556, lng: 129.0915 },
  용인: { lat: 37.2411, lng: 127.1776 },
  단양시: { lat: 36.9849, lng: 128.369 },
  영천시: { lat: 35.9724, lng: 128.9433 },
  문경군: { lat: 36.7818, lng: 128.1289 },
  봉화군: { lat: 36.8927, lng: 128.7398 },
  청도군: { lat: 35.6483, lng: 128.7336 },
  양산시: { lat: 35.338, lng: 129.0264 },
  영동군: { lat: 36.1777, lng: 127.7805 },
};

const difficultyColor = {
  easy: "#22c55e",
  medium: "#f97316",
  hard: "#ef4444",
};

const listEl = document.getElementById("courseList");
const detailEl = document.getElementById("detailPanel");
const totalCountEl = document.getElementById("totalCount");
const visibleCountEl = document.getElementById("visibleCount");
const searchEl = document.getElementById("search");
const regionFilterEl = document.getElementById("regionFilter");
const mountainFolderFilterEl = document.getElementById("mountainFolderFilter");
const difficultyFilterEl = document.getElementById("difficultyFilter");
const distanceFilterEl = document.getElementById("distanceFilter");
const distanceValueEl = document.getElementById("distanceValue");
const sortByEl = document.getElementById("sortBy");
const favoriteOnlyEl = document.getElementById("favoriteOnly");
const loadDataBtn = document.getElementById("loadDataBtn");
const fitAllBtn = document.getElementById("fitAllBtn");
const resetFiltersBtn = document.getElementById("resetFiltersBtn");
const jsonInput = document.getElementById("jsonInput");
const gpxInput = document.getElementById("gpxInput");

const map = L.map("map", { zoomControl: true }).setView([36.55, 127.9], 8);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
}).addTo(map);

const state = {
  selectedId: null,
  search: "",
  region: "",
  folder: "",
  difficulty: "all",
  maxDistance: 18,
  sortBy: "name",
  favoriteOnly: false,
};

const favorites = new Set(JSON.parse(localStorage.getItem("km100-favorites") || "[]"));
const routeLayers = new Map();
let mapBounds = [];

function hashString(text) {
  let hash = 0;
  for (let i = 0; i < text.length; i += 1) {
    hash = (hash << 5) - hash + text.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function parseLatLng(s) {
  return [Number(s.lat), Number(s.lng)];
}

function findMountainReference(name) {
  const key = normalizeMountainKey(name);
  if (mountainNameIndex.has(key) && mountainNameIndex.get(key).length > 0) {
    return mountainNameIndex.get(key)[0];
  }

  const fallback = Array.from(mountainNameIndex.entries()).find(
    ([k]) => k.includes(key) || key.includes(k),
  );
  return fallback ? fallback[1][0] : null;
}

function detectRegionFromText(text) {
  const normalized = String(text || "")
    .replace(/,/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const tokens = normalized.split(" ");

  for (const token of tokens) {
    if (localBase[token]) return token;
    if (provinceBase[token]) return token;
  }

  return "";
}

function normalizeRoutePoints(points) {
  if (!Array.isArray(points)) return [];
  const list = points
    .map((point) => {
      if (!Array.isArray(point) || point.length < 2) return null;
      const lat = Number(point[0]);
      const lng = Number(point[1]);
      if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null;
      return [lat, lng];
    })
    .filter(Boolean);
  return list;
}

function calcElevationGain(elevations = []) {
  let gain = 0;
  let previous;
  for (const raw of elevations) {
    const elevation = Number(raw);
    if (!Number.isFinite(elevation)) continue;
    if (Number.isFinite(previous) && elevation > previous) {
      gain += elevation - previous;
    }
    previous = elevation;
  }
  return Math.round(Math.max(0, gain));
}

function getPeakFromElevations(elevations = []) {
  const filtered = elevations
    .map((value) => Number(value))
    .filter((value) => Number.isFinite(value));
  if (!filtered.length) return null;
  return Math.max(...filtered);
}

function difficultyFromHeight(height) {
  if (height >= 1300) return "hard";
  if (height >= 900) return "medium";
  return "easy";
}

function baseByRegion(region) {
  const normalized = region.replace(/,/g, " ").replace(/\s+/g, " ").trim();
  const tokens = normalized.split(" ");

  for (const token of tokens) {
    if (localBase[token]) return localBase[token];
  }

  for (const token of tokens) {
    if (provinceBase[token]) return provinceBase[token];
  }

  return { lat: 36.55, lng: 127.9 };
}

function createTrailPoints(seed, base) {
  const points = [];
  const baseR = 0.012 + (seed % 17) * 0.00055;
  for (let i = 0; i < 8; i += 1) {
    const angle = (Math.PI * 2 * i) / 8 + (seed % 100) / 420;
    const radius = baseR + (i % 3) * 0.0018;
    const jitterLat = ((seed >> (i + 1)) % 25 - 12) * 0.00009;
    const jitterLng = ((seed >> (i + 4)) % 25 - 12) * 0.00009;
    points.push([
      base.lat + Math.cos(angle) * radius + jitterLat,
      base.lng + Math.sin(angle) * radius + jitterLng,
    ]);
  }

  points.push(points[0]);
  return points;
}

function haversine(a, b) {
  const R = 6371;
  const dLat = ((b[0] - a[0]) * Math.PI) / 180;
  const dLng = ((b[1] - a[1]) * Math.PI) / 180;
  const lat1 = (a[0] * Math.PI) / 180;
  const lat2 = (b[0] * Math.PI) / 180;
  const x =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(x)));
}

function calcDistance(points) {
  let total = 0;
  for (let i = 1; i < points.length; i += 1) {
    total += haversine(points[i - 1], points[i]);
  }
  return Number(total.toFixed(1));
}

function normalizeCourse(course) {
  const seed = hashString(course.name + course.region);
  const base = baseByRegion(course.region);
  const providedRoute = normalizeRoutePoints(course.route);
  const route = providedRoute.length >= 2 ? providedRoute : createTrailPoints(seed, base);
  const routeLength = Number(course.lengthKm);
  const elevationFromRoute = getPeakFromElevations(course.elevations);
  const lengthKm = Number.isFinite(routeLength) ? routeLength : calcDistance(route);
  const gainFromRoute = calcElevationGain(course.elevations);
  const gainRaw = Number(course.gain);
  const gain = Number.isFinite(gainRaw)
    ? Math.max(0, Math.round(gainRaw))
    : Number.isFinite(gainFromRoute) && gainFromRoute > 0
      ? gainFromRoute
      : Math.round((course.elevation * 0.58) + (seed % 120));
  const resolvedElevation =
    Number.isFinite(course.elevation) && course.elevation > 0
      ? course.elevation
      : elevationFromRoute || 0;
  const finalElevation = Number.isFinite(resolvedElevation) ? resolvedElevation : 0;
  const difficulty = difficultyFromHeight(finalElevation);

  return {
    id: course.id,
    name: course.name,
    region: course.region,
    sourceFolder: course.sourceFolder || "",
    sourceFile: course.sourceFile || "",
    elevation: finalElevation,
    difficulty,
    lengthKm,
    gain,
    route,
    center: route[0],
    description: course.description || `${course.region}권에서 시작되는 ${course.name} 탐방 라인입니다.`,
    difficultyText: difficulty === "easy" ? "쉬움" : difficulty === "medium" ? "보통" : "어려움",
    grade: difficulty === "easy" ? 1 : difficulty === "medium" ? 2 : 3,
    peakLat: route[0][0],
    peakLng: route[0][1],
  };
}

let courses = rawCourses.map(normalizeCourse);

function refreshRegionFilterOptions() {
  const previousValue = regionFilterEl.value;
  regionFilterEl.innerHTML = "<option value=\"\">전체</option>";
  const regions = Array.from(new Set(courses.map((x) => x.region))).sort();
  regions.forEach((r) => {
    const option = document.createElement("option");
    option.value = r;
    option.textContent = r;
    regionFilterEl.appendChild(option);
  });
  if (regions.includes(previousValue)) {
    regionFilterEl.value = previousValue;
  } else {
    regionFilterEl.value = "";
    state.region = "";
  }
}

function refreshFolderFilterOptions() {
  if (!mountainFolderFilterEl) return;
  const previousValue = mountainFolderFilterEl.value;
  mountainFolderFilterEl.innerHTML = "<option value=\"\">전체</option>";
  const folders = Array.from(
    new Set(
      courses
        .map((x) => String(x.sourceFolder || "").trim())
        .filter(Boolean),
    ),
  ).sort();
  folders.forEach((folder) => {
    const option = document.createElement("option");
    option.value = folder;
    option.textContent = folder;
    mountainFolderFilterEl.appendChild(option);
  });

  if (folders.includes(previousValue)) {
    mountainFolderFilterEl.value = previousValue;
  } else {
    mountainFolderFilterEl.value = "";
    state.folder = "";
  }
}

function selectByLocalName(root, tagName) {
  const target = String(tagName || "").toLowerCase();
  return Array.from(root.getElementsByTagName("*")).filter(
    (node) => node.localName && node.localName.toLowerCase() === target,
  );
}

function getFirstText(root, tagName) {
  const nodes = selectByLocalName(root, tagName);
  return nodes.length ? (nodes[0].textContent || "").trim() : "";
}

function parseGpxRoutePoints(node, pointTag) {
  const pointNodes = selectByLocalName(node, pointTag);
  const route = [];
  const elevations = [];

  pointNodes.forEach((pointNode) => {
    const lat = Number(pointNode.getAttribute("lat"));
    const lng = Number(pointNode.getAttribute("lon"));
    if (!Number.isFinite(lat) || !Number.isFinite(lng)) return;

    route.push([lat, lng]);
    const elevationText = getFirstText(pointNode, "ele");
    const elevation = Number(elevationText);
    elevations.push(Number.isFinite(elevation) ? elevation : NaN);
  });

  return { route, elevations };
}

function parseMountainNameFromFileName(fileName) {
  const base = fileName.replace(/\.[^/.]+$/, "").trim();
  const firstToken = base.includes("_") ? base.split("_")[0].trim() : base;
  return firstToken;
}

function getGpxFileMeta(file) {
  const relativePath = String(file?.webkitRelativePath || file?.name || "").trim();
  const normalizedPath = relativePath.replace(/\\/g, "/").trim();
  const segments = normalizedPath ? normalizedPath.split("/").filter(Boolean) : [];
  const fileName = segments.length ? segments[segments.length - 1] : String(file?.name || "");
  const parentCandidate = segments.length >= 2 ? segments[segments.length - 2] : "";
  const parsedTitle = parseMountainNameFromFileName(fileName);
  const folderName = parentCandidate && parentCandidate !== "100대명산" && parentCandidate !== parsedTitle
    ? parentCandidate
    : parsedTitle;

  return {
    fileName,
    folderName,
    relativePath: normalizedPath,
  };
}

function getCourseFromGpxFeature(node, fileName, sourceFolder, fallbackIndex) {
  const pointTag = (node.localName || "").toLowerCase() === "trk" ? "trkpt" : "rtept";
  const { route: parsedRoute, elevations } = parseGpxRoutePoints(node, pointTag);
  if (parsedRoute.length < 2) return null;

  const fileTitle = sourceFolder || parseMountainNameFromFileName(fileName);
  const rawName = getFirstText(node, "name").replace(/\.gpx$/i, "").trim();
  const fallbackTitle = `${fileTitle || "산"} ${fallbackIndex + 1}`;
  const name = rawName || fallbackTitle;
  const ref = findMountainReference(fileTitle || name);
  const routePeak = getPeakFromElevations(elevations);
  const routeDistance = Number(getFirstText(node, "distance"));
  const rawElevation = Number(getFirstText(node, "ele"));
  const description = getFirstText(node, "desc") || getFirstText(node, "cmt");
  const regionCandidate =
    detectRegionFromText(`${description} ${rawName}`.trim()) || ref?.region || "";
  const elevation = Number.isFinite(rawElevation)
    ? rawElevation
    : routePeak || (ref ? ref.elevation : 0);

  return normalizeCourse({
    id: 0,
    name,
    region: regionCandidate || ref?.region || "",
    sourceFolder: sourceFolder || "",
    sourceFile: fileName,
    elevation,
    route: parsedRoute,
    lengthKm: Number.isFinite(routeDistance) ? routeDistance : Number.NaN,
    gain: Number(getFirstText(node, "gain")),
    elevations,
    description: description || `${name} (GPX: ${fileName})`,
  });
}

function parseGpxFile(text, fileMeta) {
  const fileName = fileMeta?.fileName || "unknown.gpx";
  const sourceFolder = fileMeta?.folderName || "";
  const parser = new DOMParser();
  const xml = parser.parseFromString(text, "application/xml");
  const parseErr = xml.getElementsByTagName("parsererror");
  if (parseErr && parseErr.length > 0) {
    throw new Error("유효한 GPX/XML 형식이 아닙니다.");
  }

  const tracks = selectByLocalName(xml, "trk");
  const routes = selectByLocalName(xml, "rte");
  const waypoints = selectByLocalName(xml, "wpt");
  const trackNodes = tracks.length > 0 ? tracks : routes;
  const hasTrack = tracks.length > 0 || routes.length > 0;

  const coursesFromFile = [];
  if (hasTrack) {
    trackNodes.forEach((node, index) => {
      const course = getCourseFromGpxFeature(node, fileName, sourceFolder, index);
      if (course) {
        coursesFromFile.push(course);
      }
    });
  } else if (waypoints.length > 0) {
    const fileTitle = parseMountainNameFromFileName(fileName);
    const ref = findMountainReference(fileTitle);
    const route = [];
    const elevations = [];

    waypoints.forEach((point) => {
      const lat = Number(point.getAttribute("lat"));
      const lng = Number(point.getAttribute("lon"));
      if (!Number.isFinite(lat) || !Number.isFinite(lng)) return;
      route.push([lat, lng]);

      const elevationText = getFirstText(point, "ele");
      const elevation = Number(elevationText);
      elevations.push(Number.isFinite(elevation) ? elevation : NaN);
    });

    const validRoute = normalizeRoutePoints(route);
    if (validRoute.length >= 2) {
      const maxElevation = elevations.filter(Number.isFinite).reduce((acc, value) => {
        if (acc === null || value > acc) return value;
        return acc;
      }, null);
      coursesFromFile.push(
        normalizeCourse({
          id: 0,
          name: fileTitle || "산",
          region: ref?.region || "",
          sourceFolder,
          sourceFile: fileName,
          elevation:
            Number.isFinite(maxElevation)
              ? maxElevation
              : Number.isFinite(Number(ref?.elevation))
                ? ref.elevation
                : 0,
          route: validRoute,
          gain: calcElevationGain(elevations),
          elevations,
          description: `${fileTitle || "산"} (GPX: ${fileName})`,
        }),
      );
    }
  }

  if (!coursesFromFile.length) {
    throw new Error("GPX에 트랙/경로/경유지(wpt) 정보가 없습니다.");
  }

  return coursesFromFile;
}

function sortCourses(items) {
  switch (state.sortBy) {
    case "height":
      return items.sort((a, b) => b.elevation - a.elevation);
    case "distance":
      return items.sort((a, b) => a.lengthKm - b.lengthKm);
    default:
      return items.sort((a, b) => a.name.localeCompare(b.name, "ko"));
  }
}

function filterCourses() {
  const query = state.search.toLowerCase();
  const regionKeyword = state.region;
  const folderKeyword = state.folder;
  const filtered = courses.filter((course) => {
    const matchSearch =
      !query ||
      course.name.toLowerCase().includes(query) ||
      course.region.toLowerCase().includes(query) ||
      course.sourceFolder.toLowerCase().includes(query);
    const matchRegion = !regionKeyword || course.region.includes(regionKeyword);
    const matchFolder = !folderKeyword || course.sourceFolder === folderKeyword;
    const matchDifficulty =
      state.difficulty === "all" || course.difficulty === state.difficulty;
    const matchDistance = course.lengthKm <= state.maxDistance;
    const matchFavorite = !state.favoriteOnly || favorites.has(course.id);

    return (
      matchSearch &&
      matchRegion &&
      matchFolder &&
      matchDifficulty &&
      matchDistance &&
      matchFavorite
    );
  });

  totalCountEl.textContent = courses.length.toString();
  visibleCountEl.textContent = filtered.length.toString();
  return sortCourses(filtered);
}

function drawMap(items) {
  routeLayers.forEach((obj, id) => {
    map.removeLayer(obj.polyline);
    map.removeLayer(obj.marker);
    routeLayers.delete(id);
  });

  mapBounds = [];
  items.forEach((course) => {
    const selected = state.selectedId === course.id;
    const line = L.polyline(course.route, {
      color: difficultyColor[course.difficulty],
      weight: selected ? 6 : 3,
      opacity: selected ? 0.95 : 0.45,
    }).addTo(map);

    const start = course.route[0];
    const end = course.route[course.route.length - 1];
    const marker = L.circleMarker(start, {
      radius: selected ? 8 : 5,
      color: selected ? "#38bdf8" : "#f8fafc",
      fillColor: selected ? "#0ea5e9" : "#ffffff",
      weight: 1,
      fillOpacity: 1,
    }).addTo(map);

    marker.bindPopup(
      `<strong>${course.name}</strong><br/>${course.region}${course.sourceFolder ? ` · ${course.sourceFolder}` : ""}<br/>난이도: ${course.difficultyText}<br/>거리: ${course.lengthKm}km`,
    );

    line.on("click", () => openCourse(course.id));
    marker.on("click", () => openCourse(course.id));

    routeLayers.set(course.id, { polyline: line, marker });
    mapBounds.push(...course.route);
  });

  if (mapBounds.length > 0) {
    map.fitBounds(L.latLngBounds(mapBounds), { padding: [30, 30] });
  }
}

function renderCourseList(items) {
  listEl.innerHTML = "";
  items.forEach((course) => {
    const item = document.createElement("div");
    item.className = "course-item";
    if (state.selectedId === course.id) item.classList.add("selected");

    const isFav = favorites.has(course.id);
    item.innerHTML = `
      <div class="course-item__title">
        <h3>${course.name}</h3>
        <button class="bookmark ${isFav ? "active" : ""}" aria-label="${course.name} 즐겨찾기">${isFav ? "★" : "☆"}</button>
      </div>
      <p>
        <span class="chip ${course.difficulty}">${course.difficultyText}</span>
        <strong> ${course.region}</strong>
        <span>${course.sourceFolder ? ` · ${course.sourceFolder}` : ""}</span>
      </p>
      <p>${course.sourceFile ? `<small>출처: ${course.sourceFile}</small><br/>` : ""}고도 ${course.elevation}m · 거리 ${course.lengthKm}km · 상승 ${course.gain}m</p>
    `;

    const button = item.querySelector(".bookmark");
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleFavorite(course.id);
    });

    item.addEventListener("click", () => openCourse(course.id));
    listEl.appendChild(item);
  });
}

function render() {
  const filtered = filterCourses();
  const visible = filtered;
  renderCourseList(visible);
  drawMap(visible);
  if (state.selectedId) {
    const selected = filtered.find((x) => x.id === state.selectedId);
    if (selected) {
      renderDetail(selected);
      return;
    }
  }
  if (filtered.length === 0) {
    detailEl.innerHTML = "<h2>검색 결과 없음</h2><p>조건을 바꿔 다시 검색해 주세요.</p>";
    state.selectedId = null;
  }
}

function renderDetail(course) {
  detailEl.innerHTML = `
    <h2>${course.name}</h2>
    <p><strong>난이도</strong> : ${course.difficultyText}</p>
    <p><strong>지역</strong> : ${course.region}</p>
    <p><strong>폴더</strong> : ${course.sourceFolder || "-"}</p>
    <p><strong>정점 높이</strong> : ${course.elevation.toLocaleString("ko-KR")}m</p>
    <p><strong>원본 파일</strong> : ${course.sourceFile || "-"}</p>
    <p><strong>거리</strong> : ${course.lengthKm}km · <strong>예상 상승량</strong> : ${course.gain}m</p>
    <div class="meta">
      <p><strong>코드</strong> : ${course.id}</p>
      <p>${course.description}</p>
    </div>
  `;
}

function openCourse(courseId) {
  const course = courses.find((x) => x.id === courseId);
  if (!course) return;

  state.selectedId = course.id;
  routeLayers.forEach(({ polyline, marker }, id) => {
    const selected = id === course.id;
    polyline.setStyle({
      weight: selected ? 6 : 3,
      opacity: selected ? 0.95 : 0.45,
    });
    marker.setRadius(selected ? 8 : 5);
    marker.setStyle({
      color: selected ? "#38bdf8" : "#f8fafc",
      fillColor: selected ? "#0ea5e9" : "#ffffff",
    });
  });

  map.fitBounds(L.latLngBounds(course.route), { padding: [40, 40] });
  renderDetail(course);
  render();
}

function normalizeImportedCourse(item, index) {
  const resolvedName = item.name || `산 ${index + 1}`;
  const reference = findMountainReference(resolvedName);
  const route = normalizeRoutePoints(item.route);
  const fallbackElevation = Number(
    Number.isFinite(Number(reference?.elevation))
      ? Number(reference.elevation)
      : NaN,
  );
  const elevation = Number.isFinite(Number(item.elevation))
    ? Number(item.elevation)
    : fallbackElevation;

  return normalizeCourse({
    id: index + 1,
    name: resolvedName,
    region: item.region || reference?.region || "",
    sourceFolder: item.sourceFolder || "",
    sourceFile: item.sourceFile || "",
    elevation: Number.isFinite(elevation) ? elevation : 0,
    route,
    lengthKm: Number(item.lengthKm),
    gain: Number(item.gain),
    elevations: item.elevations || [],
    description:
      item.description ||
      `${item.region || reference?.region || ""}권에서 시작되는 ${resolvedName} 탐방 라인입니다.`,
  });
}

function setCourses(nextCourses) {
  const normalizedCourses = nextCourses.map((course, index) => ({
    ...course,
    id:
      Number.isFinite(Number(course?.id)) && Number(course.id) > 0
        ? Number(course.id)
        : index + 1,
  }));
  const hasSelection = normalizedCourses.some((course) => course.id === state.selectedId);
  courses = normalizedCourses;
  if (!hasSelection) {
    state.selectedId = null;
  }
  refreshRegionFilterOptions();
  refreshFolderFilterOptions();
  favorites.forEach((fav) => {
    if (!courses.some((course) => course.id === fav)) {
      favorites.delete(fav);
    }
  });
  localStorage.setItem("km100-favorites", JSON.stringify(Array.from(favorites)));
}

function loadCoursesFromJson(text) {
  const imported = JSON.parse(text);
  if (!Array.isArray(imported)) {
    throw new Error("JSON 최상위 형태는 배열이어야 합니다.");
  }

  return imported.map((item, index) => normalizeImportedCourse(item, index));
}

async function loadCoursesFromGpx(files) {
  const candidates = [];
  for (const file of files) {
    const fileMeta = getGpxFileMeta(file);
    const text = await file.text();
    const parsed = parseGpxFile(text, fileMeta);
    if (!parsed.length) continue;
    candidates.push(...parsed);
  }

  if (!candidates.length) {
    throw new Error("GPX에서 표시 가능한 코스 데이터가 없습니다.");
  }

  return candidates.map((course, index) => ({ ...course, id: index + 1 }));
}

function toggleFavorite(id) {
  if (favorites.has(id)) {
    favorites.delete(id);
  } else {
    favorites.add(id);
  }
  localStorage.setItem("km100-favorites", JSON.stringify(Array.from(favorites)));
  render();
}

function initFilters() {
  refreshRegionFilterOptions();
  refreshFolderFilterOptions();

  distanceFilterEl.addEventListener("input", () => {
    state.maxDistance = Number(distanceFilterEl.value);
    distanceValueEl.textContent = state.maxDistance;
    render();
  });

  searchEl.addEventListener("input", () => {
    state.search = searchEl.value.trim();
    render();
  });

  regionFilterEl.addEventListener("change", () => {
    state.region = regionFilterEl.value;
    render();
  });

  mountainFolderFilterEl.addEventListener("change", () => {
    state.folder = mountainFolderFilterEl.value;
    render();
  });

  difficultyFilterEl.addEventListener("change", () => {
    state.difficulty = difficultyFilterEl.value;
    render();
  });

  sortByEl.addEventListener("change", () => {
    state.sortBy = sortByEl.value;
    render();
  });

  favoriteOnlyEl.addEventListener("change", () => {
    state.favoriteOnly = favoriteOnlyEl.checked;
    render();
  });

  fitAllBtn.addEventListener("click", () => {
    state.selectedId = null;
    const allItems = filterCourses();
    if (allItems.length) {
      map.fitBounds(L.latLngBounds(allItems.flatMap((c) => c.route)), { padding: [20, 20] });
    }
    render();
  });

  resetFiltersBtn.addEventListener("click", () => {
    searchEl.value = "";
    state.search = "";
    state.region = "";
    state.difficulty = "all";
    state.maxDistance = 18;
    state.sortBy = "name";
    state.favoriteOnly = false;

    difficultyFilterEl.value = "all";
    regionFilterEl.value = "";
    mountainFolderFilterEl.value = "";
    sortByEl.value = "name";
    favoriteOnlyEl.checked = false;
    distanceFilterEl.value = "18";
    distanceValueEl.textContent = "18";
    state.folder = "";
    refreshRegionFilterOptions();
    refreshFolderFilterOptions();
    render();
  });

  loadDataBtn.addEventListener("click", () => {
    setCourses(rawCourses.map(normalizeCourse));
    render();
  });

  jsonInput.addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const text = await file.text();
      const nextCourses = loadCoursesFromJson(text);
      setCourses(nextCourses);
      render();
      alert("JSON 데이터로 교체했습니다.");
    } catch (error) {
      alert(
        `JSON 파싱 실패: ${error instanceof Error ? error.message : "형식이 올바른지 확인해 주세요."}`,
      );
    } finally {
      jsonInput.value = "";
    }
  });

  gpxInput.addEventListener("change", async (event) => {
    const files = Array.from(event.target.files || []);
    if (!files.length) return;

    try {
      const nextCourses = await loadCoursesFromGpx(files);
      setCourses(nextCourses);
      render();
      alert(`${nextCourses.length}개 코스를 GPX에서 불러왔습니다.`);
    } catch (error) {
      alert(
        `GPX 파싱 실패: ${error instanceof Error ? error.message : "형식이 올바른지 확인해 주세요."}`,
      );
    } finally {
      gpxInput.value = "";
    }
  });
}

function initApp() {
  state.maxDistance = Number(distanceFilterEl.value);
  distanceValueEl.textContent = String(state.maxDistance);
  initFilters();
  totalCountEl.textContent = courses.length.toString();
  visibleCountEl.textContent = courses.length.toString();
  state.selectedId = null;
  render();
}

initApp();
