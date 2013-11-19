describe('powerRanger', function(){

    // create stubbed element and call the plugin
    var elem = $('<input type="number" />');

    // create options as separate
    // variables to test against mutations
    var font_size = '';
    var cutoff_length = 7;
    var cutoff_size = 20;
    var scale_factor = 12;

    elem.powerRangeIt({
        scaleFactor: scale_factor,
        cutoff_length: cutoff_length,
        cutoff_size: cutoff_size,
        scrub_nan: true
    });

    it('Should resize input to 38px for 6 digits', function(){
        elem.val('99999').trigger('change');
        font_size = elem.css('font-size');
        expect(font_size).toEqual('38px');
    });

    it('Should resize input to 48px for 4 digits', function(){
        elem.val('9999').trigger('change');
        font_size = elem.css('font-size');
        expect(font_size).toEqual('48px');
    });

    it('Should resize input to 58px for 3 digits', function(){
        elem.val('999').trigger('change');
        font_size = elem.css('font-size');
        expect(font_size).toEqual('58px');
    });

    it('Should resize input to 68px for 2 digits', function(){
        elem.val('99').trigger('change');
        font_size = elem.css('font-size');
        expect(font_size).toEqual('68px');
    });

    it('Should resize input to 78px for 1 digits', function(){
        elem.val('9').trigger('change');
        font_size = elem.css('font-size');
        expect(font_size).toEqual('78px');
    });

    it('Should equal cutoff size when digits reach cutoff length', function(){
        elem.val('9999999').trigger('change');
        font_size = elem.css('font-size');
        console.log(font_size);
        expect(font_size).toEqual(cutoff_size + 'px');
    });

});
