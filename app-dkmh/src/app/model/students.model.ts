import { subjects } from './subjects.model';

export class students {
    maso_sv: number;
    hoten_sv: string;
    gt_sv: string;
    mk_sv: string;
    lop: string;
    khoa: string;
    ngaysinh: string;
    dt_sv: number;
    dc_sv: string;
    subjects: subjects[];

    constructor(
        maso_sv: number,
        hoten_sv: string,
        gt_sv: string,
        mk_sv: string,
        lop: string,
        khoa: string,
        ngaysinh: string,
        dt_sv: number,
        dc_sv: string,
        subjects: subjects[]
    ) {
        this.maso_sv = maso_sv;
        this.hoten_sv = hoten_sv;
        this.gt_sv = gt_sv;
        this.mk_sv = mk_sv;
        this.lop = lop;
        this.khoa = khoa;
        this.ngaysinh = ngaysinh;
        this.dt_sv = dt_sv;
        this.dc_sv = dc_sv;
        this.subjects = subjects;
    }
}
