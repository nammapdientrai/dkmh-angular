import { lectures } from './lectures.model';
import { price } from './price.model';
import { times } from './times.model';

export class subjects {
  ma_mh: number;
  ten_mh: string;
  stc: number;
  so_tiet_lt: number;
  so_tiet_th: number;
  gv_lt: lectures;
  gv_th: lectures;
  gia: price;
  times: times;
  ma_ph: string;

  constructor(
    ma_mh: number,
    ten_mh: string,
    stc: number,
    so_tiet_lt: number,
    so_tiet_th: number,
    gv_lt: lectures,
    gv_th: lectures,
    gia: price,
    times: times,
    ma_ph: string
  ) {
    this.ma_mh = ma_mh;
    this.ten_mh = ten_mh;
    this.stc = stc;
    this.so_tiet_lt = so_tiet_lt
    this.so_tiet_th = so_tiet_th;
    this.gv_lt = gv_lt;
    this.gv_th = gv_th;
    this.gia = gia;
    this.times = times;
    this.ma_ph = ma_ph;
  };
}
