import { Practitioner } from "../../types/practitioner";
import http from "../../api";
import config from "../../config";
import interpolate from "pinterpolate";

export const createPractitioner = async (data: Practitioner): Promise<any> => {
  const url = config.endpoints.practitioner.fetchAll;
  const response = await http.post(url, data);
  return response.data;
};

export const fetchPractitionerDetails = async (): Promise<Practitioner[]> => {
  const url = config.endpoints.practitioner.fetchAll;
  const response = await http.get(url);
  return response.data;
};

export const fetchPractitionerDetailsById = async (
  id: number
): Promise<Practitioner> => {
  const url = interpolate(config.endpoints.practitioner.fetchById, { id });
  const response = await http.get(url);
  return response.data;
};

export const updatePractitioner = async (
  id: number,
  data: Practitioner
): Promise<any> => {
  const url = interpolate(config.endpoints.practitioner.fetchById, { id });
  const response = await http.patch(url, data);
  return response.data;
};
