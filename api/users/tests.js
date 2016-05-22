import chai, {expect} from 'chai';
import bows from 'bows';

import userViews from '../../api/users/views';

var logger = bows('test.users.api');

describe('register a user', () => {

    // assign some generic re-usable variables
    let res = { json: data => data },
        username = 'foo',
        password = 'bar',
        req = { body: { username, password }},
        newUser = { username, password },
        apiResponse = undefined,
        finalResponse = undefined;


    // the flow if the user already exists
    it('already exists', function(){
        // Get the view as a generator
        var view = userViews.register(req, res);

        // initialize the view
        view.next();

        // The user already exists in the system
        apiResponse = {data: [newUser]};
        finalResponse = view.next(apiResponse);
        expect(
            finalResponse.value
        ).to.deep.equal(
            { errors: 'User already exists' }
        )

        // the generator (view) should be done now
        expect(finalResponse.done).to.equal(true);
    });

    it('is successful', function(){
        // Get the view as a generator
        var view = userViews.register(req, res);

        // initialize the view
        view.next();

        // the user has not been found
        var apiResponse = {data: []};
        view.next(apiResponse);

        // assuming the api will have a successful response
        apiResponse = {data: [newUser]};
        finalResponse = view.next(apiResponse);
        expect(
            finalResponse.value
        ).to.deep.equal(
            [ newUser, ]
        );

        // the generator (view) should be done now
        expect(finalResponse.done).to.equal(true);
    });
});
