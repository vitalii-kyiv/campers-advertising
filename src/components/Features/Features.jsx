import { ReactComponent as AdultsIcon } from '../../images/adults.svg';
import { ReactComponent as TransmissionIcon } from '../../images/transmission.svg';
import { ReactComponent as PetrolIcon } from '../../images/petrol.svg';
import { ReactComponent as KitchenIcon } from '../../images/kitchen.svg';
import { ReactComponent as BedsIcon } from '../../images/beds.svg';
import { ReactComponent as AcIcon } from '../../images/ac.svg';
import { ReactComponent as CdIcon } from '../../images/cd.svg';
import { ReactComponent as RadioIcon } from '../../images/radio.svg';
import { ReactComponent as HobIcon } from '../../images/hob.svg';
import css from './Futures.module.css';

const Futures = ({ item }) => {
  return (
    <div className={css.futureContainer}>
      <ul className={css.detailsList}>
        {item.adults > 0 && (
          <li className={css.detailsListItem}>
            <div className={css.detailsItemWrapper}>
              <AdultsIcon className={css.detailsIcon} />
              <span
                className={css.detailsItemText}
              >{`${item.adults} adults`}</span>
            </div>
          </li>
        )}
        {item.transmission && (
          <li className={css.detailsListItem}>
            <div className={css.detailsItemWrapper}>
              <TransmissionIcon className={css.detailsIcon} />
              <span className={css.detailsItemText}>{item.transmission}</span>
            </div>
          </li>
        )}
        {item.details.airConditioner > 0 && (
          <li className={css.detailsListItem}>
            <div className={css.detailsItemWrapper}>
              <AcIcon className={css.detailsIcon} />
              <span className={css.detailsItemText}>AC</span>
            </div>
          </li>
        )}
        {item.engine && (
          <li className={css.detailsListItem}>
            <div className={css.detailsItemWrapper}>
              <PetrolIcon className={css.detailsIcon} />
              <span className={css.detailsItemText}>{item.engine}</span>
            </div>
          </li>
        )}
        {item.details.kitchen > 0 && (
          <li className={css.detailsListItem}>
            <div className={css.detailsItemWrapper}>
              <KitchenIcon className={css.detailsIcon} />
              <span className={css.detailsItemText}>kitchen</span>
            </div>
          </li>
        )}
        {item.details.beds > 0 && (
          <li className={css.detailsListItem}>
            <div className={css.detailsItemWrapper}>
              <BedsIcon className={css.detailsIcon} />
              <span
                className={css.detailsItemText}
              >{`${item.details.beds} beds`}</span>
            </div>
          </li>
        )}
        {item.details.CD > 0 && (
          <li className={css.detailsListItem}>
            <div className={css.detailsItemWrapper}>
              <CdIcon className={css.cdIcon} />
              <span className={css.detailsItemText}>CD</span>
            </div>
          </li>
        )}
        {item.details.radio > 0 && (
          <li className={css.detailsListItem}>
            <div className={css.detailsItemWrapper}>
              <RadioIcon className={css.radioIcon} />
              <span className={css.detailsItemText}>Radio</span>
            </div>
          </li>
        )}
        {item.details.hob > 0 && (
          <li className={css.detailsListItem}>
            <div className={css.detailsItemWrapper}>
              <HobIcon className={css.detailsIcon} />
              <span
                className={css.detailsItemText}
              >{`${item.details.hob} hob`}</span>
            </div>
          </li>
        )}
      </ul>
      <ul className={css.vehicleDetailsList}>
        <h3 className="secondTitle">Vehicle details</h3>
        {item.form && (
          <li className={css.vehicleDetailsListItem}>
            <div className={css.vehicleDetailsItemWrapper}>
              <span className="ditailsText">Form</span>
              <span className="ditailsText">{item.form}</span>
            </div>
          </li>
        )}
        {item.form && (
          <li className={css.vehicleDetailsListItem}>
            <div className={css.vehicleDetailsItemWrapper}>
              <span className="ditailsText">Length</span>
              <span className="ditailsText">{item.length}</span>
            </div>
          </li>
        )}
        {item.width && (
          <li className={css.vehicleDetailsListItem}>
            <div className={css.vehicleDetailsItemWrapper}>
              <span className="ditailsText">Width</span>
              <span className="ditailsText">{item.width}</span>
            </div>
          </li>
        )}
        {item.height && (
          <li className={css.vehicleDetailsListItem}>
            <div className={css.vehicleDetailsItemWrapper}>
              <span className="ditailsText">Height</span>
              <span className="ditailsText">{item.height}</span>
            </div>
          </li>
        )}
        {item.tank && (
          <li className={css.vehicleDetailsListItem}>
            <div className={css.vehicleDetailsItemWrapper}>
              <span className="ditailsText">Tank</span>
              <span className="ditailsText">{item.tank}</span>
            </div>
          </li>
        )}
        {item.consumption && (
          <li className={css.vehicleDetailsListItem}>
            <div className={css.vehicleDetailsItemWrapper}>
              <span className="ditailsText">Consumption</span>
              <span className="ditailsText">{item.consumption}</span>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Futures;
