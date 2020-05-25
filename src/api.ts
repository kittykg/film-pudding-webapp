import axios from "axios";

import { Prediction } from "@/types/prediction.ts";

const FILM_PUDDING_SERVER_URL = process.env.VUE_APP_FILM_PUDDING_SERVER_URL;

export function getPrediction(
  filmName: string,
  filmYear: string
): Promise<Prediction> {
  return axios
    .post(`${FILM_PUDDING_SERVER_URL}/predict`, {
      name: filmName,
      year: filmYear
    })
    .then(r => r.data);
}
