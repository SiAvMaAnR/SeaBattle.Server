interface IPlayersResponse {
  my: {
    socket: string;
    init: boolean;
    ready: boolean;
  };
  enemy: {
    socket: string;
    init: boolean;
    ready: boolean;
  };
}

export default IPlayersResponse;
