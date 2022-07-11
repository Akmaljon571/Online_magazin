import { Header, Main, Footer } from './page'
import { Container } from './components'
import Routess from './routes/routes';


function User() {
    return ( 
        <Container>
         <Header />
         <Main>
            <Routess />
         </Main>
         <Footer />
        </Container>
     );
}

export default User;