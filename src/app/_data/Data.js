import { v4 as uuidv4 } from 'uuid'

export const listSatistical = [
  {
    id: uuidv4(),
    countNum: '256',
    cate: 'Employers',
    status: 'increase',
    percent: '0.40',
    icon: 'UserIcon',
    bgColor: 'bg-primary'
  },
  {
    id: uuidv4(),
    countNum: '4,2026',
    cate: 'Candidates',
    status: 'reduce',
    percent: '0.40',
    icon: 'UserGroupIcon',
    bgColor: 'bg-red-500'
  },
  {
    id: uuidv4(),
    countNum: '48',
    cate: 'Locations',
    status: 'increase',
    percent: '0.82',
    icon: 'GlobeAsiaAustraliaIcon',
    bgColor: 'bg-yellow-500'
  },
  {
    id: uuidv4(),
    countNum: '1,116',
    cate: 'Recruiters',
    status: 'reduce',
    percent: '0.82',
    icon: 'ClipboardDocumentCheckIcon',
    bgColor: 'bg-green-500'
  },
  {
    id: uuidv4(),
    countNum: '1,468',
    cate: 'Subscriptions',
    status: 'increase',
    percent: '0.82',
    icon: 'BellIcon',
    bgColor: 'bg-pink-500'
  },
  {
    id: uuidv4(),
    countNum: '34%',
    cate: 'Upload Ratio',
    status: 'increase',
    percent: '0.82',
    icon: 'PhotoIcon',
    bgColor: 'bg-gray-500'
  }
]

export const listRecentEmployer = [
  {
    id: uuidv4(),
    fullName: 'Mayor Kelly',
    avart: './images/face1.jpeg',
    position: 'Backend',
    role: '1',
    email: 'mayorKelly@emailUser.com',
    location: 'Japan',
    dateCreate: '09/04/2024'
  },
  {
    id: uuidv4(),
    fullName: 'Josi Kia',
    avart: './images/face2.jpeg',
    position: 'Frontend',
    role: '2',
    email: 'JosiKia@emailUser.com',
    location: 'Vietnam',
    dateCreate: '09/04/2024'
  },
  {
    id: uuidv4(),
    fullName: 'Mary Luna',
    avart: './images/face3.jpeg',
    position: 'Backend',
    role: '2',
    email: 'maryLuna@emailUser.com',
    location: 'Japan',
    dateCreate: '09/04/2024'
  },
  {
    id: uuidv4(),
    fullName: 'Keyo Tran',
    avart: './images/face4.jpeg',
    position: 'Frontend',
    role: '1',
    email: 'keyoTran@emailUser.com',
    location: 'Vietnam',
    dateCreate: '09/04/2024'
  },
  {
    id: uuidv4(),
    fullName: 'Jessica Hoe',
    avart: './images/face5.jpeg',
    position: 'Frontend',
    role: '3',
    email: 'jessicaHoe@emailUser.com',
    location: 'Japan',
    dateCreate: '09/04/2024'
  }
]
