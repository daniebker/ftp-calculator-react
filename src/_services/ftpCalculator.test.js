import ftpCalculator from './ftpCalculator';

describe('calculateFtp should', () => {
    let ftp;
    beforeEach(() => {        
        ftp = ftpCalculator.calculateFtp(100);
    });

    test('calculate ftp as 95% of test value', () => {
        expect(ftp.value).toEqual(95);
    });

    test('calculate endurance range', () => {
        expect(ftp.endurance.min).toEqual(56);
        expect(ftp.endurance.max).toEqual(75);
    });
    
    test('calculate tempo range', () => {
        expect(ftp.tempo.min).toEqual(76);
        expect(ftp.tempo.max).toEqual(90);
    });
    
    test('calculate sweet spot range', () => {
        expect(ftp.sweetSpot.min).toEqual(83);
        expect(ftp.sweetSpot.max).toEqual(88);
    });
    
    test('calculate threshold range', () => {
        expect(ftp.threshold.min).toEqual(91);
        expect(ftp.threshold.max).toEqual(105);
    });
    
    test('calculate VO2 Max range', () => {
        expect(ftp.votwoMax.min).toEqual(106);
        expect(ftp.votwoMax.max).toEqual(120);
    });
    
    test('calculate aerobic capacity range', () => {
        expect(ftp.aerobicCapacity.min).toEqual(121);
        expect(ftp.aerobicCapacity.max).toEqual(130);
    });
});