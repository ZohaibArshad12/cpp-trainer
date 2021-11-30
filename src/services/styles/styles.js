import styled from "styled-components";
import { Box } from "@mui/system";
export const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th {
      border-right: 1px solid black;
      border-bottom: 1px solid black;
      padding: 0.1rem;
      background-color: lightgrey;
    }
    td {
      margin: 0;
      padding: 0.2rem;
      /* background-color: lightgrey; */
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;
export const FancyTableStyle = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid #105652;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th {
      /*border-right: 1px solid black;
      border-bottom: 1px solid black;*/
      padding: 0.1rem;
      background-color: #77e4d4;
    }
    td {
      /*margin: 0;
      padding: 0.2rem;*/
      background-color: #fbf3e4;
      /*border-bottom: 1px solid #105652;
      border-right: 1px solid #105652;*/

      :last-child {
        border-right: 0;
      }
    }
  }
`;
export const CKMatrixTableStyle = styled.div`
  padding: 1rem;
  tbody {
    display: flex;
    flex-direction: row;
  }
  table {
    border-spacing: 0;
    border: 1px solid #105652;
    display: flex;
    flex-direction: row;
    tr {
      display: flex;
      flex-direction: column;
    }

    th {
      border-right: 1px solid black;
      border-bottom: 1px solid black;
      padding: 0.1rem;
      background-color: #77e4d4;
      height: 60px;
    }
    td {
      /*margin: 0;
      padding: 0.2rem;*/
      height: 60px;
      border-bottom: 1px solid #105652;
      border-right: 1px solid #105652;
      font-size: 0.68rem;
    }
    /*tr { display: block; float: left; }*/
    th,
    td {
      display: block;
    }
  }
`;
export const CenteredDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  height: 80vh;
  width: 95vw;
  align-items: center;
`;

export const AdjacentDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CardTitle = styled.em`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  font-size: 0.81rem;
`;
export const ScrollableDescription = styled(Box)`
  overflow-y: scroll;
  height: 100px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export default Styles;
