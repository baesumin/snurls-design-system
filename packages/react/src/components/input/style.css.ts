import { style } from "@vanilla-extract/css";

export const wrapper = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  width: "100%",
});

export const input = style({
  fontFamily: "SUIT, sans-serif",
  fontSize: "15px",
  padding: "0 44px 0 20px",
  boxSizing: "border-box",
  height: "48px",
  border: "1px solid #D3D7DF",
  borderRadius: "8px",
  outline: "none",
  background: "#fff",
  color: "#222",
  transition: "border-color 0.15s",
  width: "100%",

  "::placeholder": {
    color: "#A0A7B2",
  },
});

export const inputFocus = style({
  borderColor: "#0077E6",
});
export const inputError = style({
  borderColor: "#E8322D",
});
export const inputDisabled = style({
  background: "#F3F4F6",
  color: "#C8CCD7",
  pointerEvents: "none",
});

export const clearBtn = style({
  position: "absolute",
  right: "14px",
  top: "50%",
  transform: "translateY(-50%)",
  width: "16px",
  height: "16px",
  background: "#eee",
  border: "none",
  borderRadius: "50%",
  color: "white",
  fontSize: "14px",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
