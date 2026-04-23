import styles from './DescriptionRegion.module.scss';
import Iframe from '@/shared/ui/Iframe';

const DescriptionRegion = () => {
    return (
        <section className={`${styles.description_region}`}>
            <h2>Курская область на карте россии</h2>

            <p className="simple_text">
                <a target="_blank" href="" rel="noopener noreferrer">
                    <strong>Курская область</strong>
                </a>{' '}
                — субъект Российской Федерации, входит в состав Центрального федерального округа.
                Административный центр — город Курск.
            </p>

            <Iframe mapSrc="https://yandex.ru/map-widget/v1/?ll=36.300031%2C51.680046&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzAwMDA0MBIr0KDQvtGB0YHQuNGPLCDQmtGD0YDRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCIKDUV8EEIV2iNOQg%2C%2C&z=7" />
        </section>
    );
};

export default DescriptionRegion;
