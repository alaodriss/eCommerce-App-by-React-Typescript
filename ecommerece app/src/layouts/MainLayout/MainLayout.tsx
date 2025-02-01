import { Container } from "react-bootstrap"
import styles from "./styles.module.css"
import {Header ,Footer} from "../../components/common"
const {conatiner, wrapper} = styles

const MainLayout = () => {
  return (
    <Container className={conatiner}>
        <Header/>
            <div className={wrapper}>
            </div>
        <Footer />
    </Container>
  )
}

export default MainLayout