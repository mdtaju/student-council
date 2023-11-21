import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
  allCourses: [],
};

export const searchAndApplySlice = createSlice({
  name: "searchAndApply",
  initialState,
  reducers: {
    setSearchResultCourses: (state, action) => {
      state.courses = action.payload;
      state.allCourses = action.payload;
    },
    setFilterCourses: (state, action) => {
      state.courses = action.payload;
    },
    addToSortList: (state, action) => {
      const { course_id, isAddShortlist } = action.payload;

      if (isAddShortlist) {
        state.courses = state.courses.map((c) => {
          const { id } = c;
          if (id === +course_id) {
            return {
              ...c,
              isSortListed: true,
            };
          } else {
            return {
              ...c,
            };
          }
        });
      }

      if (!isAddShortlist) {
        state.courses = state.courses.map((c) => {
          const { id } = c;
          if (id === +course_id) {
            return {
              ...c,
              isSortListed: false,
            };
          } else {
            return {
              ...c,
            };
          }
        });
      }
    },
    addToSortListAll: (state, action) => {
      if (action.payload) {
        state.courses = state.courses.map((c) => {
          return {
            ...c,
            isSortListed: true,
          };
        });
        return;
      } else {
        state.courses = state.courses.map((c) => {
          return {
            ...c,
            isSortListed: false,
          };
        });
      }
    },
  },
});

export const {
  setSearchResultCourses,
  setFilterCourses,
  addToSortList,
  addToSortListAll,
} = searchAndApplySlice.actions;
export default searchAndApplySlice.reducer;
