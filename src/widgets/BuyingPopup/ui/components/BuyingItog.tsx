import { formatNumber } from '@/shared/utils/formateNumber';
import React, { FC } from 'react';

interface IBuyintItog{
    summ : number,
    deliverySumm : number,
    deliveryCity : string,
    address : string
}
const BuyingItog:FC<IBuyintItog> = ({deliveryCity, deliverySumm, summ, address}) => {
    return (
        <div className="flex flex-col gap-1 ml-auto">
            <p className="p text-black text-right">
            Сумма : {formatNumber(summ)} р
            </p>
            <p className="p text-black text-right">
            Доставка : {deliverySumm} р
            </p>
            <p className="p text-black text-right">
            Город : {deliveryCity.length ? deliveryCity : "не указан"}
            </p>
            <p className="p text-black text-right">
            Адрес : {address.length ? address : "не указан"}
            </p>
            <p className='mid-title text-right text-black font-bold'>Итого : {formatNumber(summ + deliverySumm)} р</p>
      </div>
    );
};

export default React.memo(BuyingItog);