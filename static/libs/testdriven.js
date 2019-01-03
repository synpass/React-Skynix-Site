$(document).ready(function changebg(){
	$('#td-title .item-wave').hover(function() {
		var titledata = $(this).data('wavetitle');
		$('#td-title .item-wave, #td-content .content-show').removeClass('active');
		for (i = 0; i < 9; i++ ) {
			$('#td-title').removeClass('step-' + i);
		}
		$('#td-title').removeClass('active');

		$(this).addClass('active');
		$('#td-title').addClass('step-' + titledata);
		$('#td-content .content-show[data-wavecontainer=' + titledata + ']').addClass('active');
	},
);
});
