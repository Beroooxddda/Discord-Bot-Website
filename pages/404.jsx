import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    let messages = [
        'Yolunu Mu kaybbettin Evlat?',
        'Çıkmaz sokak .',
        'Geri dön!'
    ];

    return <ErrorPage code={404} message={messages[Math.floor(Math.random()*messages.length)] || "Sayfa Bulunamadı."} />
}

export default UnkownPage;

