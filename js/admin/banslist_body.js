$(document).ready(function()
{
	$('.pagin').click(function()
	{
		FromPagination = true;
		$('input[name="page"]').val($(this).attr('id').replace('page_', ''));
		$("#thisForm").submit();
	});
	$('#reset').click(function()
	{
		$('input[name="send"]').val('');
		$("#thisForm").submit();
	});
	
	var DateTimePickerSettings = 
	{
		timeFormat: 'hh:mm:ss',
		showButtonPanel: false,
		timeOnlyTitle: JSLang['TP_timeOnlyTitle'],
        timeText: JSLang['timeText'],
        hourText: JSLang['hourText'],
        minuteText: JSLang['minuteText'],
        secondText: JSLang['secondText'],
        millisecText: JSLang['millisecText'],
        currentText: JSLang['currentText'],
        closeText: JSLang['closeText'],
        ampm: false,
		beforeShow: function() {
			setTimeout(function(){
			$('#ui-datepicker-div').css({'z-index': 1000});    
			},1);                    
		}
	};
    
    $('[name="date_from"]').datetimepicker(DateTimePickerSettings);
	$('[name="date_to"]').datetimepicker(DateTimePickerSettings);
});