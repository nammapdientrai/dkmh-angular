export class lectures {
  ma_gv: string;
  ten_gv: string;
  chuyen_nghanh: string;
  email: string;
  sdt: number;

  constructor(
    ma_gv: string,
    ten_gv: string,
    chuyen_nghanh: string,
    email: string,
    sdt: number
  ) {
    this.ma_gv = ma_gv;
    this.ten_gv = ten_gv;
    this.chuyen_nghanh = chuyen_nghanh;
    this.email = email;
    this.sdt = sdt;
  }
}
