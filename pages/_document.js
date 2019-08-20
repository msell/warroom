import Document, { Html, Head, Main, NextScript } from "next/document";
import styled from "@emotion/styled";

const Container = styled.div`
  overflow-y: scroll;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-overflow-scrolling: touch;
`;
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Container id="page-wrapper">
            <Main />
            <NextScript />
          </Container>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
