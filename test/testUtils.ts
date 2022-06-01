import React from "react";

export const findByTestAttr = (wrapper: any, val: string) => {
  return wrapper.find(`[data-test="${val}"]`);
};
export type ReactUseReducerType = {
  <R extends React.ReducerWithoutAction<any>, I>(
    reducer: R,
    initializerArg: I,
    initializer: (arg: I) => React.ReducerStateWithoutAction<R>
  ): [React.ReducerStateWithoutAction<R>, React.DispatchWithoutAction];
  <R extends React.ReducerWithoutAction<any>>(
    reducer: R,
    initializerArg: React.ReducerStateWithoutAction<R>,
    initializer?: undefined
  ): [React.ReducerStateWithoutAction<R>, React.DispatchWithoutAction];
  <R extends React.Reducer<any, any>, I>(
    reducer: R,
    initializerArg: I & React.ReducerState<R>,
    initializer: (arg: I & React.ReducerState<R>) => React.ReducerState<R>
  ): [React.ReducerState<R>, React.Dispatch<React.ReducerAction<R>>];
  <R extends React.Reducer<any, any>, I>(
    reducer: R,
    initializerArg: I,
    initializer: (arg: I) => React.ReducerState<R>
  ): [React.ReducerState<R>, React.Dispatch<React.ReducerAction<R>>];
  <R extends React.Reducer<any, any>>(reducer: R, initialState: React.ReducerState<R>, initializer?: undefined): [
    React.ReducerState<R>,
    React.Dispatch<React.ReducerAction<R>>
  ];
};
