import { useEffect, useMemo, useState } from "react";
import { AxiosError } from "axios";

import { API_RESOURCE } from "../../../shared/constant";
import { useAxios } from "../../../shared/context";
import { Person } from "../model";

interface PeopleQueryState {
  loading: boolean;
  data?: Person[];
  error?: AxiosError;
}

export const usePeopleQuery = (): PeopleQueryState => {
  const axios = useAxios();
  const [state, setState] = useState<PeopleQueryState>({ loading: false });

  const fetchPeoples = async () => {
    try {
      const { data } = await axios.get<Person[]>(`/${API_RESOURCE.PEOPLE}`);

      setState({ data, loading: false, error: undefined });
    } catch (error) {
      setState({ data: undefined, error: error as AxiosError, loading: false });
    }
  };

  useEffect(() => {
    setState({ loading: true });

    fetchPeoples();
  }, []);

  const value = useMemo(() => state, [state]);

  return value;
};
