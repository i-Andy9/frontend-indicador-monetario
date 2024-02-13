import { transformDates } from "@/utils/functions";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IndicatorState {
  list: string[]; // Lista de todos los indicadores
  selectedIndicator: string | null; // Indicador seleccionado actualmente
  date: string | null;
}

const initialState: IndicatorState = {
  list: [],
  selectedIndicator: null,
  date: transformDates(new Date()),
};

export const indicatorSlice = createSlice({
  name: "indicator",
  initialState,
  reducers: {
    updateList: (state, action) => {
      state.list = action.payload;
    },
    selectIndicator: (state, action: PayloadAction<string | null>) => {
      state.selectedIndicator = action.payload;
    },
    selectIndicatorByDate: (state, action: PayloadAction<string | null>) => {
      state.selectedIndicator = action.payload;
      state.date = action.payload;
    },
  },
});

export const { updateList,selectIndicator } = indicatorSlice.actions;
export default indicatorSlice.reducer;
