module.exports = (req, res, next) => {

    console.log('parseContestFormData');

    req.body.contests = JSON.parse(req.body.formFields);

    if (req.files) {
        req.files.forEach( file => {
            req.body.files[file.originalname] = file.filename;
        });
    }

    next();
};