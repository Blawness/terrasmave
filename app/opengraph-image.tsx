import { ImageResponse } from "next/og";

export const alt = "Terrasmave – Camilan Homemade Organik";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f5f0e8 0%, #e8dcc8 100%)",
          color: "#3d3424",
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: "-0.02em" }}>
          Terrasmave
        </div>
        <div style={{ fontSize: 36, marginTop: 16, color: "#6b5d45" }}>
          Camilan Homemade Berbahan Organik
        </div>
      </div>
    ),
    { ...size },
  );
}
