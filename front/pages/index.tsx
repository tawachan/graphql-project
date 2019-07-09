import * as React from "react";
import { RoomsComponent, RoomsComponentProps } from "../graphql/generated";

export interface IndexProps {
  hoge: string;
}

class Index extends React.Component<IndexProps, {}> {
  public render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#FFFFFF",
          height: "100%",
          width: "100%",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <RoomsComponent>
          {({ loading, error, data }): RoomsComponentProps => {
            if (loading) {
              return <span>loading: {JSON.stringify(loading)}</span>;
            }

            if (error) {
              return <span>error: {JSON.stringify(error)}</span>;
            }
            return (
              <ul>
                {data.privateRooms.map(room => (
                  <li>
                    {room.id}:{room.name}:{room.status}
                  </li>
                ))}
                {data.publicRooms.map(room => (
                  <li>
                    {room.id}:{room.name}:{room.status}
                  </li>
                ))}
              </ul>
            );
          }}
        </RoomsComponent>
      </div>
    );
  }
}

export default Index;
