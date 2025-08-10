import { typography } from "../variables";

const base = {
  fontFamily: typography.fontFamily.suit,
};

export const text = {
  display1: {
    ...base,
    fontSize: typography.fontSize[56],
    fontWeight: typography.fontWeight[800],
    lineHeight: typography.lineHeight[67],
  },
  display2: {
    ...base,
    fontSize: typography.fontSize[40],
    fontWeight: typography.fontWeight[800],
    lineHeight: typography.lineHeight[56],
  },
  title1: {
    ...base,
    fontSize: typography.fontSize[36],
    fontWeight: typography.fontWeight[800],
    lineHeight: typography.lineHeight[45],
  },
  title2: {
    ...base,
    fontSize: typography.fontSize[28],
    fontWeight: typography.fontWeight[800],
    lineHeight: typography.lineHeight[35],
  },
  title3: {
    ...base,
    fontSize: typography.fontSize[24],
    fontWeight: typography.fontWeight[800],
    lineHeight: typography.lineHeight[32],
  },
  heading1: {
    ...base,
    fontSize: typography.fontSize[22],
    fontWeight: typography.fontWeight[800],
    lineHeight: typography.lineHeight[30],
  },
  heading2: {
    ...base,
    fontSize: typography.fontSize[20],
    fontWeight: typography.fontWeight[800],
    lineHeight: typography.lineHeight[28],
  },
  headline1: {
    ...base,
    fontSize: typography.fontSize[18],
    fontWeight: typography.fontWeight[700],
    lineHeight: typography.lineHeight[25],
  },
  headline2: {
    ...base,
    fontSize: typography.fontSize[17],
    fontWeight: typography.fontWeight[700],
    lineHeight: typography.lineHeight[23],
  },
  body1: {
    fontSize: typography.fontSize[16],
    fontWeight: typography.fontWeight[600],
    lineHeight: typography.lineHeight[23],
  },
  body1Reading: {
    fontSize: typography.fontSize[16],
    fontWeight: typography.fontWeight[500],
    lineHeight: typography.lineHeight[26],
  },
  body2: {
    ...base,
    fontSize: typography.fontSize[15],
    fontWeight: typography.fontWeight[600],
    lineHeight: typography.lineHeight[22],
  },
  body2Reading: {
    ...base,
    fontSize: typography.fontSize[15],
    fontWeight: typography.fontWeight[500],
    lineHeight: typography.lineHeight[25],
  },
  label1: {
    ...base,
    fontSize: typography.fontSize[14],
    fontWeight: typography.fontWeight[600],
    lineHeight: typography.lineHeight[21],
  },
  label2: {
    fontSize: typography.fontSize[13],
    fontWeight: typography.fontWeight[600],
    lineHeight: typography.lineHeight[20],
  },
  caption1: {
    ...base,
    fontSize: typography.fontSize[12],
    fontWeight: typography.fontWeight[600],
    lineHeight: typography.lineHeight[18],
  },
  caption2: {
    ...base,
    fontSize: typography.fontSize[11],
    fontWeight: typography.fontWeight[600],
    lineHeight: typography.lineHeight[16],
  },
};
