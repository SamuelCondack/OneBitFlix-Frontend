import HeaderGeneric from '@/src/components/common/headerGeneric';
import styles from '../styles/registerLogin.module.scss';
import Header from "next/head";

const Register = function () {
    return (<>
        <head>
            <title>Onebitflix - Register</title>
            <link rel="shortcut icon" href="/favicon.svg" type='image/x-icon' />
        </head>
        <main>
            <HeaderGeneric logoUrl='/' btnUrl='/login' btnContent='Want to login'/>
        </main>
    </>);
}

export default Register