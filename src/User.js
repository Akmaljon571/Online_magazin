import { Header, Main, Footer } from './page'
import { Container } from './components'
import Home from './home/home';

function User() {
    return ( 
        <Container>
         <Header />
         <Main><Home /></Main>
         <Footer />
        </Container>
     );
}

export default User;