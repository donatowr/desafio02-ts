import { Footer } from "./Footer"
import { Header } from "./Header/Header"

export const Layout = ({ children }: any) => {
  return(
  
    
    <Layout>
    <Header />
        { children }      
      <Footer />
      </Layout>
  
    
  )
}
