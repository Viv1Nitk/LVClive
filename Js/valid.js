        function jfun2()
        {
            //alert("Just For Testing")
            var name=form1.naam.value;
            var designation=form1.designation.value;
            var email=form1.email.value;
           //alert(name)

            if(name=="")
            {
                alert("Name Required!!!")
                form1.naam.focus();
                return false;
              
            }
            else if(designation=="")
            {
                alert("designation Required!!!")
                form1.designation.focus();
                return false;
            }
            else if(email=="")
            {
                alert("email Required!!!")
                form1.email.focus();
                return false;
            }
            else
            {
                alert("Go next!!!");
                return true;
               
            }

        }
        function jfun3()
        {
            //alert("Just For Testing")
            var name=form2.naam.value;
            var Mmarks=form2.maths.value;
            var Smarks=form2.science.value;
            var Cmarks=form2.computer.value;
            
           //alert(name)

            if(name=="")
            {
                alert("Name Required!!!")
                form2.naam.focus();
                return false;
              
            }
            else if(Mmarks=="")
            {
                alert("maths marks Required!!!")
                form2.maths.focus();
                return false;
            }
            else if(Smarks=="")
            {
                alert("science marks Required!!!")
                form2.science.focus();
                return false;
            }
            else if(Cmarks=="")
            {
                alert("computer marks Required!!!")
                form2.computer.focus();
                return false;
            }
            else
            {
                alert("Result calucated!!!");
                form2.tmarks.value=parseInt(Mmarks)+parseInt(Smarks)+parseInt(Cmarks);

                form2.percentage.value=form2.tmarks.value/3;
                form2.max.value=Math.max(Mmarks,Smarks,Cmarks);
                return true;
               
            }

        }

        function jfun4()
        {
            window.open("instruction.html","mywin","width=400,height=300,screenX=50,left=50,screenY=50,top=50,status=yes,menubar=yes");
        }

        function jfun5()
        {
            if(form3.languages.value=="mean") 
            { window.open("CourseDetail.html","mywin","width=400,height=300,screenX=50,left=50,screenY=50,top=50,status=yes,menubar=yes");}
            else if(form3.languages.value=="mern") 
            { window.open("CourseDetail.html","mywin","width=400,height=300,screenX=50,left=50,screenY=50,top=50,status=yes,menubar=yes");}
           
        }


        function jfun6()
        {
          prompt("Your Name")
          var x=prompt("Your Country")

          if(x=="india"||x=="India") alert("Congrats you are getting a 50% discount on all courses")
          else alert("No discount for you")
        }

        function jfun7()
        {
            window.open("test.html","mywin","width=400,height=300,screenX=50,left=50,screenY=50,top=50,status=yes,menubar=yes");
        }

        function jfun8()
        {
            var ans1=form4.question0.value;
            var ans2=form4.question1.value;
            var marks
           
            if(ans1=="B") marks=2;
            if(ans2=="B") marks+=2;


              alert("you got "+marks+" marks" )
        }