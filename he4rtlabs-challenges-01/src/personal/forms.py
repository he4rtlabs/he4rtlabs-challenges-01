from django import forms

class MyForm(forms.Form):
    dailytime = forms.FloatField(label='dailytime', max_value=12)
    weekdays = forms.FloatField(label='weekdays', max_value=12)
    vacationdays = forms.FloatField(label='vacationdays', max_value=12)
    totalprice = forms.FloatField(label='totalprice', max_value=12)

