import 'react-native';
import React from 'react';
import { ProspectListScreen } from '../../../app/components/ProspectListScreen/ProspectListScreen'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

/* Mock for the default props of the component. */
var arg = {
	state: {
		params:{
			item:null,
		}
	}
}

var prospectListMock = {
    "result_count": 26,
    "total_count": "26",
    "next_offset": 26,
    "entry_list": [
        {
            "id": "e1355768-37d4-b696-1697-5915a45e00e3",
            "module_name": "Leads",
            "name_value_list": {
                "name": {
                    "name": "name",
                    "value": "prospect 7"
                },
                "last_name": {
                    "name": "last_name",
                    "value": "prospect 7"
                },
                "first_name": {
                    "name": "first_name",
                    "value": ""
                },
                "title": {
                    "name": "title",
                    "value": ""
                },
                "department": {
                    "name": "department",
                    "value": ""
                },
                "account_name": {
                    "name": "account_name",
                    "value": ""
                },
                "email1": {
                    "name": "email1",
                    "value": ""
                },
                "phone_work": {
                    "name": "phone_work",
                    "value": ""
                },
                "phone_mobile": {
                    "name": "phone_mobile",
                    "value": ""
                },
                "website": {
                    "name": "website",
                    "value": ""
                },
                "primary_address_street": {
                    "name": "primary_address_street",
                    "value": ""
                },
                "primary_address_city": {
                    "name": "primary_address_city",
                    "value": ""
                },
                "primary_address_postalcode": {
                    "name": "primary_address_postalcode",
                    "value": ""
                },
                "primary_address_country": {
                    "name": "primary_address_country",
                    "value": ""
                },
                "description": {
                    "name": "description",
                    "value": ""
                }
            }
        },
        {
            "id": "8d446661-35ef-22f0-3a0f-5919aef6db1a",
            "module_name": "Leads",
            "name_value_list": {
                "name": {
                    "name": "name",
                    "value": "Accccbbb"
                },
                "last_name": {
                    "name": "last_name",
                    "value": "Accccbbb"
                },
                "first_name": {
                    "name": "first_name",
                    "value": ""
                },
                "title": {
                    "name": "title",
                    "value": ""
                },
                "department": {
                    "name": "department",
                    "value": ""
                },
                "account_name": {
                    "name": "account_name",
                    "value": "eeeee"
                },
                "email1": {
                    "name": "email1",
                    "value": "monmail@mail.com"
                },
                "phone_work": {
                    "name": "phone_work",
                    "value": "54676856"
                },
                "phone_mobile": {
                    "name": "phone_mobile",
                    "value": "56456"
                },
                "website": {
                    "name": "website",
                    "value": "http://google.com"
                },
                "primary_address_street": {
                    "name": "primary_address_street",
                    "value": "Mon addresse principale"
                },
                "primary_address_city": {
                    "name": "primary_address_city",
                    "value": "ma ville"
                },
                "primary_address_postalcode": {
                    "name": "primary_address_postalcode",
                    "value": "58745"
                },
                "primary_address_country": {
                    "name": "primary_address_country",
                    "value": "mon pays"
                },
                "description": {
                    "name": "description",
                    "value": "sqfsdfsfsqklfjlqsfjdsjf sdk jklsfjkdlsj fldjsf dsj fkldj fdklsf ldksjfkldsjf kdsfj dkls fjslq fj\r\ndsfdsfds"
                }
            }
        }
    ],
    "relationship_list": []
}

const fetchingProspect = jest.fn();
fetchingProspect.mockReturnValue(prospectListMock);

describe('ProspectListScreen', () => {
    it('renders without crashing', () => {
       const tree = renderer.create(
       	<ProspectListScreen navigation={arg}/>
       	);
    });
});