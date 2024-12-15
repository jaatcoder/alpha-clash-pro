#include<iostream>

using namespace std;

    class student {
        char stdname[20];
        int stdid;
        public:
        void getresult()

       {
         cout<<"Enter the name of the student"<<endl;
        cin>>stdname;
        cout<<"Enter the id of the student"<<endl;
        cin>>stdid;
       }
void displayvalues()
{
    cout<<"The name of the student is "<<stdname<<endl;
    cout<<"The id of the student is "<<stdid<<endl;
}
    };