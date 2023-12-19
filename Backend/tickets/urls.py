
from django.urls import path
from .views import TicketList, TicketListCreateView, TicketDetailView

urlpatterns = [
    path('tickets/', TicketListCreateView.as_view(), name='ticket-list-create'),
    path('tickets/<int:pk>/', TicketDetailView.as_view(), name='ticket-detail'),
    path('ticketslist/', TicketList.as_view(), name='ticket-list'),
]
