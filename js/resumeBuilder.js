var contacts = {
    mobile: "13888888888",
    email: "59450804@qq.com",
    github: "https://github.com/guazilalala",
    twitter: "@Feet",
    location: "GuangDong"
}
var bio = {
    name: "Tan Guoyong",
    role: "Web Developer",
    contacts: contacts,
    welcomeMessage: "hello world",
    skills: ['C#', 'CSS', 'JavaScript', 'HTML'],
    biopic: "images/fry.jpg",
    display: function () {

    }
}

var education = {
    schools: [{
        name: "广州市高级技工学校",
        location: "广东广州",
        degree: "中专",
        majors: ["计算机应用与辅助设计"],
        dates: "2000.9" + " - " + "2003.7",
        url: "http://www.gzgj.net/",
    },
    {
        name: "广东海洋大学",
        location: "广东广州",
        degree: "大专",
        majors: ["工商管理"],
        dates: "2012.3" + " - " + "2015.1",
        url: "http://www.gdou.edu.cn/",
    }
    ],
    onlineCourses: [{
        title: "RHCE7",
        school: "51CTO",
        dates: "2014.12" + " - " + "2015.6",
        url: "http://www.51cto.com"
    },
    {
        title: "前端入门",
        school: "优达学城",
        dates: "2017.8" + " - " + "2017.11",
        url: "https://cn.udacity.com/"
    }
    ],
    display: function () {
        $("#education").append(HTMLschoolStart);
        
        education.schools.forEach(function(schools){
            var formattedName = HTMLschoolName.replace('%data%', schools.name);
            var formattedDegree = HTMLschoolDegree.replace('%data%', schools.degree);
            var formattedNameDegree = formattedName + formattedDegree;
            $(".education-entry:last").append(formattedNameDegree);
        
            var formattedDates = HTMLschoolDates.replace('%data%', schools.dates);
            $(".education-entry:last").append(formattedDates);

            var formattedLocation = HTMLschoolLocation.replace('%data%', schools.location);
            $(".education-entry:last").append(formattedLocation);
            
            var formattedMajor = HTMLschoolMajor.replace('%data%',schools.majors);
            $(".education-entry:last").append(formattedMajor);           
        })

        $("#education").append(HTMLonlineClasses);
        
        education.onlineCourses.forEach(function(onlineCourses){
            var formatOnlineTitle = HTMLonlineTitle.replace('%data%', onlineCourses.title);        
            var formatOnlineSchool = HTMLonlineSchool.replace('%data%', onlineCourses.school);
            var formatOnlineTitleSchool = formatOnlineTitle + formatOnlineSchool;
            $(".education-entry:last").append(formatOnlineTitleSchool);
            
            var formatOnlineDates = HTMLonlineDates.replace('%data%', onlineCourses.dates);
            $(".education-entry:last").append(formatOnlineDates);
            
            var formatOnlineURL = HTMLonlineURL.replace('%data%', onlineCourses.url);
            $(".education-entry:last").append(formatOnlineURL);
            
        })
    }
}

education.display();




var work = {
    jobs: [{
        employer: "广州华银医学检验中心有限公司",
        title: "Developer",
        location: "广州",
        dates: "2010.5" + " - " + "2017.5",
        description:"负责研发公司应用软件的模块设计、开发和交付。"
    }],
    display: function () {
        $("#workExperience").append(HTMLworkStart);
        
        work.jobs.forEach(function(jobs){

            var formattedEmployer = HTMLworkEmployer.replace('%data%',jobs.employer);
            var formattedTitle = HTMLworkTitle.replace('%data%',jobs.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedLocation = HTMLworkLocation.replace('%data%',jobs.location);
            $(".work-entry:last").append(formattedLocation);

            var formattedDates = HTMLworkDates.replace('%data%',jobs.dates);
            $(".work-entry:last").append(formattedDates);

            var formattedDescription = HTMLworkDescription.replace('%data%',jobs.description);
            $(".work-entry:last").append(formattedDescription);
            
        })
     }
}

work.display();


var projects = {
    projects: [{
        title: "Sample Project 1",
        dates: "2017.5 - 2017.8",
        description: "该项目的主要实现目标是集中管理各个厂家不同通迅协议的LED情报板设备，实现设备远程控制，节目编辑发布，模拟显示等功能。本项目C/S架构,采用技术有.Net、Winform、WPF、EF、MSSQL、Log4net、Quartz、DevExpress等。",
        images: ["images/197x148.gif", "images/197x148.gif"]
    }],
    display: function () { 
        $("#projects").append(HTMLprojectStart);
        
        projects.projects.forEach(function(projects){

            var formattedTitle = HTMLprojectTitle.replace('%data%', projects.title);
            $(".project-entry:last").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace('%data%', projects.dates);
            $(".project-entry:last").append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace('%data%', projects.description);
            $(".project-entry:last").append(formattedDescription);
            
            projects.images.forEach(imageElement => {
                $(".project-entry:last").append(HTMLprojectImage.replace('%data%', imageElement));
            });
        })
    }
}

projects.display();

var formatName = HTMLheaderName.replace('%data%', bio.name);
var formatRole = HTMLheaderRole.replace('%data%', bio.role);
$("#header").prepend(formatName + formatRole);

var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
var formattedCompents = formattedMobile + formattedEmail + formattedTwitter + formattedGithub + formattedLocation


$("#topContacts").append(formattedCompents);
$("#footerContacts").append(formattedCompents);

$("#header").append(HTMLbioPic.replace('%data%', bio.biopic));
$("#header").append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));
$("#header").append(HTMLskillsStart);
bio.skills.forEach(element => {
    $("#header").append(HTMLskills.replace('%data%', element));
})



$("#mapDiv").append(googleMap);
