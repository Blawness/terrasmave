import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#9f1239",
          color: "#f5f0e8",
          fontSize: 320,
          fontWeight: 700,
          fontFamily: "serif",
        }}
      >
        T
      </div>
    ),
    { ...size },
  );
}
