import {BsInstagram} from 'react-icons/bs'
import {FaWhatsapp} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'

export const links = [
    {id: 1, link: '#', title: 'Home'},
    {id: 2, link: '#about', title: 'Sobre'},
    {id: 3, link: '#services', title: 'Serviços'},
    {id: 4, link: '#portfolio', title: 'Portfolio'},
    {id: 5, link: '#contact', title: 'Contato'}
]


export const socials = [
    {id: 1, link: 'https://www.instagram.com/systemsid_/', icon: <BsInstagram/>},
    {id: 2, link: 'https://api.whatsapp.com/send/?phone=%2B11954492918', icon: <FaWhatsapp/>},
    {id: 3, link: 'mailto:adaooliveira44@gmail.com', icon: <HiOutlineMail/>},
]