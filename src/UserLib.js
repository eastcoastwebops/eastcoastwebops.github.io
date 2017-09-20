$(function() {

    //Wait for Pinegrow to wake-up
    $("body").one("pinegrow-ready", function(e, pinegrow) {

        //Create new Pinegrow framework object
        var f = new PgFramework("UserLib", "UserLib");

        //This will prevent activating multiple versions of this framework being loaded
        f.type = "UserLib";
        f.allow_single_type = true;
        f.user_lib = true

        var comp_comp1 = new PgComponentType('comp1', 'Comp 1 / Column');
        comp_comp1.code = '<div class="col s12 l9" data-pgc-define="aboutn" data-pgc-define-name="aboutn" data-pgc-define-description="about" data-pgc-define-photo-preview-only data-pgc-save-partial="about">\
    <h5 class="white-text">About Me</h5>\
    <p class="grey-text text-lighten-4">Although I have Fullstack development skills, I consider myself a Front Developer and I\'ve been involved in web design and development for quite some time, having originally started as a Graphic Designer, but finding my career pushing me more and\
        more towards the "Development" career.\
        <p class="grey-text text-lighten-4">It\'s not that I don\'t like Back End work but it\'s not what I LOVE to do. I am a visual person. I was always into Tech, into computers, and into graphic design and painting, but I never really had a chance to stop and take classes for this stuff\
            unless you consider watching YouTube tutorials or CodeSchool as "Taking Classes."</p>\
        <p class="grey-text text-lighten-4">I\'ve worked on the front end and back end code on ecommerce sites for Citibank, Verizon, Allstate, AARP and many other large companies and have been put in positions where I had to write code in JavaScript or HTML or PHP or Java or CSS or Jquery\
            or PhotoShop or SQL or how to build a WordPress site, or how to use BootStrap or Responsive Design. I was just thrown into projects and had to learn. Fast. How to write a web service or file processor in Java, how to use templates with javascript\
            and track events realtime in google analytics on pages with dynamic content. How to setup a customer site with 2 million records that could drive sales for the company by tracking who was returning to the site based on a coupon code I prepopulated\
            in the data.</p>\
        <p class="grey-text text-lighten-4">My favorite coding tools are simply a text editor, a web browser and Photoshop. With those three tools alone, one can create the most fantastic sites and projects that can be imagined.</p>\
        <p class="grey-text text-lighten-4">\
            <br>\
        </p>\
</div>';
        comp_comp1.parent_selector = '.row';
        f.addComponentType(comp_comp1);
        
        //Tell Pinegrow about the framework
        pinegrow.addFramework(f);
            
        var section = new PgFrameworkLibSection("UserLib_lib", "Components");
        //Pass components in array
        section.setComponentTypes([comp_comp1]);

        f.addLibSection(section);
   });
});