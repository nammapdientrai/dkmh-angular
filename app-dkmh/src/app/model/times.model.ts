export class times {
  ma_tg_hoc: string;
  ngh_lt: number;
  ngh_th: number;
  tiet_bd_lt: number;
  tiet_bd_th: number;
  sotiet: number;

  constructor(
    ma_tg_hoc: string,
    ngh_lt: number,
    ngh_th: number,
    tiet_bd_lt: number,
    tiet_bd_th: number,
    sotiet: number
  ) {
    this.ma_tg_hoc = ma_tg_hoc;
    this.ngh_lt = ngh_lt;
    this.ngh_th = ngh_th;
    this.tiet_bd_lt = tiet_bd_lt;
    this.tiet_bd_th = tiet_bd_th;
    this.sotiet = sotiet;
  }
}
