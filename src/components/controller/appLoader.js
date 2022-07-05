import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'ac9bed6d4d3940adb7f51bfec6c7927b', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
