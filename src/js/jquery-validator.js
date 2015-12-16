;(function($) {
    'use strict';

    // Validation array
    var Validations = [];

        // Create the errors array
        Validations["errors"] = [];
        Validations["errors"]["phone"] = "The phone number entered is not valid";
        Validations["errors"]["date"] = "The date entered is not valid";
        Validations["errors"]["postal_code"] = "The postal code entered is not valid";
        Validations["errors"]["email"] = "The email address entered is not valid";

        // US validations
        Validations["us-date"] = new RegExp("^([0]?[1-9]|[1][0-2])[./-]([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0-9]{4}|[0-9]{2})$");
        Validations["us-zipcode"] = new RegExp("^\\d{5}(-\\d{4})?$");
        // Validations["us-phone"] = {};

        // Email validation
        //Validations["email"] = new RegExp("^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$");
        Validations["url-domain"] = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");

        // Canadian validations
        Validations["ca-postal"] = new RegExp("^[A-Za-z][0-9][A-Za-z]\s{0,1}[0-9][A-Za-z][0-9]$");

    // CSS Styles
    var cssRedHalo = {
        "box-shadow" : "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(255,0,0,.6)",
        "border-color" : "#ff0000",
        "outline" : "0"
    };

    var cssGreenHalo = {
        "box-shadow" : "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(0,255,0,.6)",
        "border-color" : "#00ff00",
        "outline" : "0"
    };

    // Global options
    var opts = {};

    // Attach an event to the elements
    function attachValidation(elem) {
        $(elem).blur(validate);
        $(elem).focus(onfocus);
    }

    // Reset the CSS
    function onfocus(event) {
        $(this).removeAttr("style");
    }

    // Validate the fields
    function validate(event) {
        var $elem = $(this);
        var regex = Validations[$elem.data("validation")];
        var isValid = (regex.test($elem.val()) ? true : false);

        // The test came back false
        if (!isValid) {
            $elem.css(cssRedHalo);
        } else {
            $elem.css(cssGreenHalo);
        }
    }

    // The plugin object
    $.fn.Validator = function(options) {

        // Set the default options
        opts = $.extend({
            useHalos: true,
            errorClass: '',
            successClass: ''
        }, options);

        // Get the list of elements
        var $elems = this;

        // Loop through the elements
        $elems.each(function() {

            // Bind blur event
            attachValidation(this);
        });

        return $elems;
    }

})(jQuery);
