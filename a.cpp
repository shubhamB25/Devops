#include<bits/stdc++.h>
using namespace std;
#define ll long long int

int main(){
    ll n , k ;
    cin >> n >> k ;
    cin>>n;
    vector<int> a ;
    ll temp = n;
    vector<int> count(10) ;
    while(temp > 0)
    {
        count[temp%10] ++;
        temp = temp / 10 ;
    }

    int ans = 1e9 ;
    for(int i = 0; i <= 9; i++)
    {
        if(count[i] == 0) continue;
        int req = k - count[i];
        vector<pair<int,int>> cost;
        for(int j = 0; j <= 9; j++)
        {
            if(i == j || count[j] == 0) continue ;
            if(count[j] > req)
            {
                cost.push_back({req * abs(i-j), req});
            }
            else{
                cost.push_back({abs(i-j) * count[j],count[j]});
            }
        }
        sort(cost.begin(), cost.end()) ;
        int temp = 0 ;
        int curr_cost = 0;
        for(auto it : cost)
        {
            if(temp + it.second > req)
            {
                curr_cost += (it.first / it.second) *(req - temp) ;
                temp += (req -temp);
            }
            else
            {
                curr_cost += it.first;
                temp += it.second;
            }
            if(temp == req) break;

        }
        //cout<<curr_cost<<" / ";
        ans = min(ans, curr_cost);
    }
    cout<<ans<<'\n';

    return 0 ;
}
