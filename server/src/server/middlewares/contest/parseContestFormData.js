module.exports = (req, res, next) => {

    console.log('parseContestFormData');

    req.body.contests = JSON.parse(req.body.formFields);

    if (req.files) {
        req.body.files = {};

        req.files.forEach( file => {
            const {originalname, filename} = file;
            req.body.files[originalname] = filename;
        });
    }

    console.log('next');

    next();
};