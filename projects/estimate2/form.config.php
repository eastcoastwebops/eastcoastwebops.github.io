<?php namespace JF;
/**

Copyright 2019 JQueryForm.com
License: http://www.jqueryform.com/license.php

FormID:  jqueryform-7be9ba
Date:    2019-01-29 00:54:25
Version: v2.1.4
Generated by http://www.jqueryform.com

PHP 5.3+ is required.
If mailgun is used AND the form has file upload field, PHP 5.5+ is required.

*/

class Config {
	private static $config;

    public static function getConfig( $decode = true ){
    	self::$config = self::_getConfig( $decode );
    	self::overwriteConfig();
    	return self::$config;
    }

    private static function _getConfig( $decode = true ){
        ob_start();
        // ---------------------------------------------------------------------
        // JSON format config
        // Note: please make a copy before you edit config manually
        // ---------------------------------------------------------------------

/**JSON_START**/ ?>
{
    "formId": "jqueryform-7be9ba",
    "email": {
        "to": "ryan@pbhw.cc",
        "cc": "",
        "bcc": "",
        "subject": "WindowEstimator",
        "template": "You receive an email from {sender.fullname}.\n\nThe web form data:\n{dataTable}\n\nReference ID: {AutoID}\nIP: {IP}\nDate: {Date}\nTime: {Time}\nWebsite: {HTTP_HOST}\nReferer: {HTTP_REFERER}\n",
        "sendmail_from": "no-repy@eastcoastdev.000webhostapp.com"
    },
    "admin": {
        "users": "admin:future",
        "dataDelivery": "emailAndFile",
        "save2dbExample": true
    },
    "thankyou": {
        "url": "\/thankyou.html",
        "message": "",
        "seconds": "10"
    },
    "autoResponse": {
        "includeAttachments": false,
        "subject": "Your Estimate",
        "template": "Dear {sender.fullname},\n\nThank you for filling out the form. Here is the copy of your data:\n{dataTable}\n\nWe will contact you shortly.\n\nBest Regards,\n{HTTP_HOST}\n\n\nReference ID: {AutoID}\nYour IP: {IP}\nDate: {Date}\nTime: {Time}\n",
        "replyToName": "Estimator",
        "replyTo": "reply@eastcoastdev.000webhostapp.com"
    },
    "seo": {
        "trackerId": "",
        "title": "",
        "description": "",
        "keywords": "",
        "author": ""
    },
    "mailer": "local",
    "smtp": {
        "host": "smtp.gmail.com",
        "user": "eastcoastwebops@gmail.com",
        "password": "F",
        "port": "465",
        "security": "ssl",
        "debug": true
    },
    "mailgun": {
        "domain": "",
        "apiKey": "",
        "fromEmail": "",
        "fromName": ""
    },
    "styles": {
        "iCheck": {
            "enabled": true,
            "skin": "flat",
            "colorScheme": "yellow"
        },
        "Select2": {
            "enabled": true
        }
    },
    "logics": [],
    "fields": [
        {
            "label": "Page Navigation",
            "field_type": "page_navigation",
            "required": true,
            "field_options": {
                "images": {
                    "urls": "",
                    "style": [],
                    "slideshow": false
                },
                "navigation": {
                    "style": "steps",
                    "showNumber": false,
                    "isButtonPrev": true,
                    "titles": [
                        {
                            "id": "f7",
                            "title": "Step X"
                        },
                        {
                            "id": "f0",
                            "title": "Submit"
                        }
                    ]
                },
                "hidden": true
            },
            "id": "f8",
            "cid": "c50"
        },
        {
            "label": "Select Window Types",
            "field_type": "checkboxes",
            "required": true,
            "field_options": {
                "images": {
                    "urls": "",
                    "style": [],
                    "slideshow": false
                },
                "options": [
                    {
                        "label": "Sliding",
                        "checked": false,
                        "value": "Sliding"
                    },
                    {
                        "label": "Awning",
                        "checked": false,
                        "value": "Awning"
                    },
                    {
                        "label": "Casement",
                        "checked": false,
                        "value": "Casement"
                    },
                    {
                        "label": "Fixed",
                        "checked": null,
                        "value": "Fixed"
                    },
                    {
                        "label": "Single-Hung",
                        "checked": null,
                        "value": "Single-Hung"
                    },
                    {
                        "label": "Double-Hung",
                        "checked": null,
                        "value": "Double-Hung"
                    },
                    {
                        "label": "Tilt & Turn",
                        "checked": null,
                        "value": "Tilt & Turn"
                    }
                ],
                "validators": {
                    "minlength": {
                        "msg": "Please select at least {0} option(s)"
                    },
                    "maxlength": {
                        "msg": "Please select no more than {0} option(s)"
                    },
                    "required": {
                        "enabled": true
                    }
                },
                "presetJson": "",
                "style": {
                    "columns": "inline"
                }
            },
            "id": "f1",
            "cid": "c13"
        },
        {
            "label": "How many windows are involved",
            "field_type": "radio",
            "required": true,
            "field_options": {
                "images": {
                    "urls": "",
                    "style": [],
                    "slideshow": false
                },
                "options": [
                    {
                        "label": "1",
                        "checked": false,
                        "value": "1"
                    },
                    {
                        "label": "3-5",
                        "checked": false,
                        "value": "3-5"
                    },
                    {
                        "label": "6-9",
                        "checked": false,
                        "value": "6-9"
                    },
                    {
                        "label": "10+",
                        "checked": null,
                        "value": "10+"
                    }
                ],
                "presetJson": "",
                "validators": {
                    "required": {
                        "enabled": true
                    }
                },
                "style": {
                    "columns": "inline"
                }
            },
            "id": "f2",
            "cid": "c19"
        },
        {
            "label": "What is the nature of your windows project?",
            "field_type": "radio",
            "required": true,
            "field_options": {
                "images": {
                    "urls": "",
                    "style": [],
                    "slideshow": false
                },
                "options": [
                    {
                        "label": "Install",
                        "checked": false,
                        "value": "Install"
                    },
                    {
                        "label": "Replace",
                        "checked": false,
                        "value": "Replace"
                    },
                    {
                        "label": "Repair",
                        "checked": false,
                        "value": "Repair"
                    }
                ],
                "presetJson": "",
                "validators": {
                    "required": {
                        "enabled": true
                    }
                },
                "style": {
                    "columns": "inline"
                }
            },
            "id": "f3",
            "cid": "c24"
        },
        {
            "label": "How soon do you want to begin this project",
            "field_type": "radio",
            "required": true,
            "field_options": {
                "images": {
                    "urls": "",
                    "style": [],
                    "slideshow": false
                },
                "options": [
                    {
                        "label": "Immediately",
                        "checked": false,
                        "value": "immediately"
                    },
                    {
                        "label": "Within 6 Months",
                        "checked": false,
                        "value": "Within 6 Months"
                    },
                    {
                        "label": "Not Sure",
                        "checked": false,
                        "value": "Not Sure"
                    }
                ],
                "presetJson": "",
                "style": {
                    "columns": "inline"
                },
                "validators": {
                    "required": {
                        "enabled": true
                    }
                }
            },
            "id": "f4",
            "cid": "c29"
        },
        {
            "label": "Do you own your own home",
            "field_type": "radio",
            "required": true,
            "field_options": {
                "images": {
                    "urls": "",
                    "style": [],
                    "slideshow": false
                },
                "options": [
                    {
                        "label": "Yes",
                        "checked": false,
                        "value": "Yes"
                    },
                    {
                        "label": "No",
                        "checked": false,
                        "value": "No"
                    },
                    {
                        "label": "No, but I am allowed to make changes",
                        "checked": false,
                        "value": "No but can make changes"
                    }
                ],
                "presetJson": "",
                "validators": {
                    "required": {
                        "enabled": true
                    }
                },
                "style": {
                    "columns": "inline"
                }
            },
            "id": "f5",
            "cid": "c34"
        },
        {
            "label": "Enter Your Zip Code",
            "field_type": "number",
            "required": true,
            "field_options": {
                "images": {
                    "urls": "",
                    "style": [],
                    "slideshow": false
                },
                "numSpinner": {
                    "enabled": false
                },
                "validators": {
                    "number": {
                        "enabled": true
                    },
                    "required": {
                        "enabled": true
                    },
                    "min": {
                        "enabled": true,
                        "val": "11111"
                    },
                    "max": {
                        "enabled": true,
                        "val": "99999"
                    }
                }
            },
            "id": "f6",
            "cid": "c39"
        },
        {
            "label": "Page Break",
            "field_type": "page_break",
            "required": true,
            "field_options": {
                "images": {
                    "urls": "",
                    "style": [],
                    "slideshow": false
                },
                "page": {
                    "title": "Step X",
                    "labelPrev": "< Back",
                    "labelNext": "Start >>",
                    "showPageNumnber": false,
                    "pageNumberText": "{page} \/ {total}",
                    "disabled": false
                },
                "hidden": false
            },
            "id": "f7",
            "cid": "c45"
        },
        {
            "label": "First Name",
            "field_type": "name",
            "required": true,
            "field_options": {
                "images": {
                    "urls": "",
                    "style": [],
                    "slideshow": false
                },
                "sender": "firstname",
                "validators": {
                    "required": {
                        "enabled": true
                    }
                }
            },
            "id": "f10",
            "cid": "c62"
        },
        {
            "label": "Last Name",
            "field_type": "name",
            "required": true,
            "field_options": {
                "images": {
                    "urls": "",
                    "style": [],
                    "slideshow": false
                },
                "sender": "lastname",
                "validators": {
                    "required": {
                        "enabled": true
                    }
                }
            },
            "id": "f11",
            "cid": "c67"
        },
        {
            "label": "Phone",
            "field_type": "phone",
            "required": true,
            "field_options": {
                "images": {
                    "urls": "",
                    "style": [],
                    "slideshow": false
                },
                "sender": false,
                "placeholder": "xxx-xxx-xxxx",
                "addon": {
                    "leftIcon": "glyphicon glyphicon-earphone"
                },
                "validators": {
                    "pattern": {
                        "enabled": true,
                        "val": "[0-9]{3,4}[ -.]*[0-9]{3,4}[ -.]*[0-9]{4}",
                        "msg": "Invalid phone number"
                    },
                    "required": {
                        "enabled": true
                    }
                }
            },
            "phone": {
                "validationMethod": "simple",
                "simpleFormat": "xxx-xxx-xxxx",
                "usePhoneLib": "N"
            },
            "id": "f12",
            "cid": "c74"
        },
        {
            "label": "Email",
            "field_type": "email",
            "required": true,
            "field_options": {
                "images": {
                    "urls": "",
                    "style": [],
                    "slideshow": false
                },
                "sender": false,
                "validators": {
                    "email": {
                        "enabled": true
                    }
                }
            },
            "id": "f13",
            "cid": "c79"
        },
        {
            "label": "Street Address",
            "field_type": "address",
            "required": true,
            "field_options": {
                "images": {
                    "urls": "",
                    "style": [],
                    "slideshow": false
                }
            },
            "labelHide": false,
            "gMapApiKey": "",
            "gaCompleteEnabled": true,
            "gaCountryRestrictions": "",
            "gaPostalCodeRestrictions": "",
            "gaLanguage": "",
            "showLabel": false,
            "showPlaceholder": true,
            "showDescription": false,
            "subfields": {
                "addressLine1": {
                    "order": 1,
                    "label": "Address Line1",
                    "field_options": {
                        "enabled": true,
                        "gAddressTypes": "street_number route",
                        "gAddressName": "long_name",
                        "placeholder": "1234 Main St.",
                        "description": "Street address, P.O. box, company name, c\/o",
                        "validators": {
                            "required": {
                                "enabled": true,
                                "msg": "This field is required."
                            }
                        }
                    }
                },
                "addressLine2": {
                    "order": 2,
                    "label": "Address Line2",
                    "field_options": {
                        "enabled": false,
                        "placeholder": "Unit 1234",
                        "description": "Apartment, suite, unit, building, floor, etc.",
                        "validators": {
                            "required": {
                                "enabled": false,
                                "msg": ""
                            }
                        }
                    }
                },
                "city": {
                    "order": 3,
                    "label": "City",
                    "field_options": {
                        "enabled": false,
                        "gAddressTypes": "locality",
                        "gAddressName": "long_name",
                        "placeholder": "City",
                        "description": "City",
                        "validators": {
                            "required": {
                                "enabled": true,
                                "msg": "This field is required."
                            }
                        }
                    }
                },
                "state": {
                    "order": 4,
                    "label": "State \/ Province \/ Region",
                    "field_options": {
                        "enabled": false,
                        "gAddressTypes": "administrative_area_level_1",
                        "gAddressName": "long_name",
                        "placeholder": "State \/ Province \/ Region",
                        "description": "State \/ Province \/ Region",
                        "validators": {
                            "required": {
                                "enabled": true,
                                "msg": "This field is required."
                            }
                        }
                    }
                },
                "postalCode": {
                    "order": 5,
                    "label": "Postal \/ Zip Code",
                    "field_options": {
                        "enabled": false,
                        "gAddressTypes": "postal_code",
                        "gAddressName": "long_name",
                        "placeholder": "Postal \/ Zip Code",
                        "description": "Postal \/ Zip Code",
                        "validators": {
                            "required": {
                                "enabled": true,
                                "msg": "This field is required."
                            }
                        }
                    }
                },
                "country": {
                    "order": 6,
                    "label": "Country",
                    "field_options": {
                        "enabled": false,
                        "gAddressTypes": "country",
                        "gAddressName": "long_name",
                        "placeholder": "Country",
                        "description": "Country",
                        "validators": {
                            "required": {
                                "enabled": true,
                                "msg": "This field is required."
                            }
                        }
                    }
                }
            },
            "id": "f14",
            "cid": "c84"
        },
        {
            "label": "Submit Button",
            "field_type": "submit",
            "required": true,
            "field_options": {
                "page": {
                    "title": "Submit",
                    "labelPrev": "< Back",
                    "showPageNumnber": false,
                    "pageNumberText": "{page} \/ {total}"
                },
                "images": {
                    "urls": "",
                    "slideshow": false
                }
            },
            "labelHide": true,
            "submit": {
                "label": "View My Free Estimate Now >>",
                "icon": "",
                "checkRequiredFields": ""
            },
            "id": "f0",
            "cid": "c0"
        }
    ],
    "gdpr": {
        "consentFieldId": "",
        "saveData": "no"
    },
    "licenseKey": "",
    "twilio": {
        "toPhone": "5612911659"
    }
}
<?php /**JSON_END**/

        $json = ob_get_clean() ;

        return $decode ? json_decode( trim($json), true ) : $json;
    } // end of getConfig()

    private static function getValue( $fieldId, $default = NULL ){
        return isset( $_POST[$fieldId] ) ? $_POST[$fieldId] : $default ;
    }

    private static function overwriteConfig(){
    	//self::get_to();
    }

    private static function get_to(){
    	$value = self::getValue( 'c25' );
    	$to = array(
    		'Option 1' => 'a@a.com',
    		'Option 2' => 'b@b.com',
    		'Option 3' => 'c@c.com',
    	);

    	if( isset( $to[$value] ) ){
    		self::$config['email']['to'] = $to[ $value ];
    	};
    }

} // end of Config class