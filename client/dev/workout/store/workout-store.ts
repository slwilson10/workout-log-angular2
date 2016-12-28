export interface WorkoutModel {
    _id: number,
    name: string,
    date: string,
    duration: {
      hours: number,
      minutes: number
    },
    calories: number,
    distance: number,
    heartrate: number,
    zones: {
      peak: number,
      cardio: number,
      fatburn: number

    },
}
