// import internal dependencies
const app =  require('./app');

// Run The Server
app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});